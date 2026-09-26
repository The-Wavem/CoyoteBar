import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import {
  VolumeUpOutlined,
  VolumeOffOutlined,
  CheckCircleOutline,
  DirectionsRunOutlined,
  AccessTimeOutlined,
  ReceiptLongOutlined,
  NotificationsActiveOutlined,
  ArrowBackIosNewOutlined,
  DoneAllOutlined,
} from '@mui/icons-material';
import CoyoteLogo from '../../components/common/CoyoteLogo';
import { getActiveCalls, updateCallStatus, subscribeCalls } from '../../services/callService';
import styles from './WaiterPanel.module.css';

// Subscription externa de relógio para React 19 puro (sem cascading renders)
function subscribeToClock(callback) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function getClockSnapshot() {
  return Math.floor(Date.now() / 1000);
}

export default function WaiterPanel() {
  const [calls, setCalls] = useState(() => getActiveCalls());
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef(null);
  const audioEnabledRef = useRef(false);

  // Mantém a ref sincronizada para uso dentro do callback de evento
  useEffect(() => {
    audioEnabledRef.current = audioEnabled;
  }, [audioEnabled]);

  // Relógio sincronizado via useSyncExternalStore
  const currentSec = useSyncExternalStore(subscribeToClock, getClockSnapshot);
  const currentTime = currentSec * 1000;

  const playAlertTone = () => {
    try {
      if (!audioCtxRef.current || !audioEnabledRef.current) return;
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);

      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate([300, 100, 300]);
      }
    } catch (e) {
      console.error('Erro ao emitir alerta sonoro:', e);
    }
  };

  // Assina os chamados em tempo real (multi-abas)
  useEffect(() => {
    const unsubscribe = subscribeCalls((newCalls, event) => {
      setCalls(newCalls);
      if (event?.type === 'NEW_CALL') {
        playAlertTone();
      }
    });

    return () => unsubscribe();
  }, []);

  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    setAudioEnabled(true);
    audioEnabledRef.current = true;
    playAlertTone();
  };

  const handleSetOnWay = (id) => {
    const updated = updateCallStatus(id, 'a_caminho');
    setCalls(updated);
  };

  const handleResolve = (id) => {
    const updated = updateCallStatus(id, 'resolvido');
    setCalls(updated);
  };

  const formatElapsed = (createdAt) => {
    const now = currentTime || createdAt;
    const diffSec = Math.max(0, Math.floor((now - createdAt) / 1000));
    const mins = Math.floor(diffSec / 60);
    const secs = diffSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getUrgencyClass = (createdAt, status) => {
    if (status === 'a_caminho') return styles.cardOnWay;
    const diffSec = (currentTime - createdAt) / 1000;
    if (diffSec > 240) return styles.cardCritical;
    if (diffSec > 120) return styles.cardWarning;
    return styles.cardNormal;
  };

  return (
    <div className={styles.panelViewport}>
      {/* Topo Clean */}
      <header className={styles.panelHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.brandIcon}>
            <CoyoteLogo size={34} />
          </div>
          <div>
            <h1 className={styles.panelTitle}>Radar de Atendimento • Coyote Bar</h1>
            <span className={styles.activeCallsCount}>
              {calls.length} {calls.length === 1 ? 'mesa aguardando' : 'mesas aguardando'}
            </span>
          </div>
        </div>

        <div className={styles.headerActions}>
          {!audioEnabled ? (
            <button
              type="button"
              onClick={initAudio}
              className={styles.soundEnableBtn}
              aria-label="Ativar som do balcão"
            >
              <VolumeOffOutlined fontSize="small" />
              <span>Ativar Som do Balcão</span>
            </button>
          ) : (
            <div className={styles.soundActiveBadge}>
              <VolumeUpOutlined fontSize="small" />
              <span>Alerta Sonoro Ativo</span>
            </div>
          )}

          <Link className={styles.exitLink} to="/cardapio" aria-label="Ir ao Cardápio">
            <ArrowBackIosNewOutlined fontSize="inherit" />
            <span>Cardápio</span>
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className={styles.panelContainer}>
        {calls.length === 0 ? (
          <div className={styles.emptyQueue}>
            <DoneAllOutlined className={styles.emptyIcon} />
            <h2 className={styles.emptyTitle}>Salão sob controle</h2>
            <p className={styles.emptySub}>Nenhuma mesa chamando no momento.</p>
          </div>
        ) : (
          <div className={styles.cardsGrid}>
            {calls.map((call) => {
              const urgencyClass = getUrgencyClass(call.createdAt, call.status);
              return (
                <div key={call.id} className={`${styles.orderCard} ${urgencyClass}`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.tableBlock}>
                      <span className={styles.tableLabel}>MESA</span>
                      <span className={styles.tableNumber}>{call.table}</span>
                    </div>

                    <div className={styles.timerBadge}>
                      <AccessTimeOutlined fontSize="small" />
                      <span>{formatElapsed(call.createdAt)}</span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.reasonRow}>
                      {call.type === 'conta' ? (
                        <ReceiptLongOutlined className={styles.reasonIcon} />
                      ) : (
                        <NotificationsActiveOutlined className={styles.reasonIcon} />
                      )}
                      <span className={styles.reasonText}>{call.reason}</span>
                    </div>

                    {call.status === 'a_caminho' && (
                      <span className={styles.onWayBadge}>Garçom a caminho</span>
                    )}
                  </div>

                  <div className={styles.cardActions}>
                    {call.status !== 'a_caminho' && (
                      <button
                        type="button"
                        onClick={() => handleSetOnWay(call.id)}
                        className={styles.onWayBtn}
                        aria-label={`Marcar a caminho da mesa ${call.table}`}
                      >
                        <DirectionsRunOutlined fontSize="small" />
                        <span>A Caminho</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleResolve(call.id)}
                      className={styles.resolveBtn}
                      aria-label={`Finalizar atendimento da mesa ${call.table}`}
                    >
                      <CheckCircleOutline fontSize="small" />
                      <span>Atendido</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
