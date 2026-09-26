import React, { useState, useRef, useSyncExternalStore } from 'react';
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
import styles from './WaiterPanel.module.css';

// Subscription externa de relógio para React 19 puro (sem cascading renders)
function subscribeToClock(callback) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function getClockSnapshot() {
  return Math.floor(Date.now() / 1000);
}

// Mock inicial de chamados para teste de operação
const INITIAL_TIMESTAMP = Date.now();
const INITIAL_CALLS = [
  {
    id: 'call-101',
    table: '04',
    reason: 'Pedir a Conta (Cartão)',
    type: 'conta',
    createdAt: INITIAL_TIMESTAMP - 260000, // 4m20s atrás (Crítico)
    status: 'pendente',
  },
  {
    id: 'call-102',
    table: '12',
    reason: 'Atendimento na Mesa',
    type: 'atendimento',
    createdAt: INITIAL_TIMESTAMP - 110000, // 1m50s atrás (Atenção)
    status: 'a_caminho',
  },
  {
    id: 'call-103',
    table: '02',
    reason: 'Novo Pedido / Dúvida Cardápio',
    type: 'pedido',
    createdAt: INITIAL_TIMESTAMP - 35000, // 35s atrás (Novo)
    status: 'pendente',
  },
];

export default function WaiterPanel() {
  const [calls, setCalls] = useState(INITIAL_CALLS);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef(null);

  // Relógio sincronizado via useSyncExternalStore
  const currentSec = useSyncExternalStore(subscribeToClock, getClockSnapshot);
  const currentTime = currentSec * 1000;

  const playAlertTone = () => {
    try {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // Tom inicial
      osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.1); // Agudo duplo

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);

      // Vibração móvel se disponível
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate([300, 100, 300]);
      }
    } catch (e) {
      console.error('Falha ao disparar áudio do balcão:', e);
    }
  };

  // Inicializador do Web Audio API (bip sonoro do balcão)
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
    playAlertTone();
  };

  const handleSetOnWay = (id) => {
    setCalls((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'a_caminho' } : c))
    );
  };

  const handleResolve = (id) => {
    setCalls((prev) => prev.filter((c) => c.id !== id));
  };

  const formatElapsed = (createdAt) => {
    const diffSec = Math.max(0, Math.floor((currentTime - createdAt) / 1000));
    const mins = Math.floor(diffSec / 60);
    const secs = diffSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getUrgencyClass = (createdAt, status) => {
    if (status === 'a_caminho') return styles.statusOnWay;
    const diffSec = (currentTime - createdAt) / 1000;
    if (diffSec > 240) return styles.urgencyCritical; // > 4 min
    if (diffSec > 120) return styles.urgencyWarning; // > 2 min
    return styles.urgencyNormal;
  };

  return (
    <div className={styles.panelViewport}>
      {/* Topo Operacional */}
      <header className={styles.panelHeader}>
        <div className={styles.headerLeft}>
          <CoyoteLogo size={38} />
          <div>
            <h1 className={styles.panelTitle}>RADAR DO SALÃO • COYOTE BAR</h1>
            <span className={styles.activeCallsCount}>
              {calls.length} {calls.length === 1 ? 'MESA CHAMANDO' : 'MESAS CHAMANDO'}
            </span>
          </div>
        </div>

        <div className={styles.headerActions}>
          {!audioEnabled ? (
            <button
              type="button"
              onClick={initAudio}
              className={styles.activateAudioBtn}
              aria-label="Ativar som do balcão"
            >
              <VolumeOffOutlined fontSize="small" />
              <span>ATIVAR SOM DO BALCÃO</span>
            </button>
          ) : (
            <div className={styles.audioActiveBadge}>
              <VolumeUpOutlined fontSize="small" />
              <span>SOM ATIVO</span>
            </div>
          )}

          <Link className={styles.exitLink} title="Sair do Radar" to="/">
            <ArrowBackIosNewOutlined fontSize="inherit" />
            <span>Sair</span>
          </Link>
        </div>
      </header>

      {/* Grid de Chamados do Salão */}
      <main className={styles.panelContent}>
        {calls.length === 0 ? (
          <div className={styles.emptyQueue}>
            <DoneAllOutlined className={styles.emptyIcon} />
            <h2 className={styles.emptyTitle}>SALÃO SOB CONTROLE</h2>
            <p className={styles.emptySub}>
              Nenhuma mesa chamando no momento. O chopp tá correndo solto.
            </p>
          </div>
        ) : (
          <div className={styles.cardsGrid}>
            {calls.map((call) => {
              const urgencyClass = getUrgencyClass(call.createdAt, call.status);
              return (
                <div key={call.id} className={`${styles.callCard} ${urgencyClass}`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.tableBadge}>
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
                      <span className={styles.onWayIndicator}>
                        Garçom a caminho da mesa...
                      </span>
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
                        <span>A CAMINHO</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleResolve(call.id)}
                      className={styles.resolveBtn}
                      aria-label={`Finalizar chamado da mesa ${call.table}`}
                    >
                      <CheckCircleOutline fontSize="small" />
                      <span>ATENDIDO</span>
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
