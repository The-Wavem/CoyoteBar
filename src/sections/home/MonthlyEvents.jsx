import React, { useState, useEffect, useRef } from 'react';
import {
  SoupKitchenOutlined,
  QueueMusicOutlined,
  DinnerDiningOutlined,
  SportsBarOutlined,
  AccessTimeOutlined,
  WhatsApp,
  CalendarMonthOutlined,
} from '@mui/icons-material';
import styles from './MonthlyEvents.module.css';

const WEEKLY_DAYS = [
  {
    id: 'terca-quinta',
    dayShort: 'TER • QUI',
    dayFull: 'TERÇA A QUINTA',
    category: 'Happy Hour & Caldos',
    icon: SoupKitchenOutlined,
    time: 'Das 18h00 às 00h00',
    title: 'TEMPORADA DE CALDOS & CHOPP EM DOBRO',
    description:
      'Cumbucas de caldo quente para espantar o frio clássico de Curitiba, acompanhadas de chopp pilsen em dobro até as 20h e porções de pastéis crocantes.',
    chalkNote: 'perfeito pra esquentar a noite depois da firma!',
    stamp: 'CHOPP EM DOBRO ATÉ 20H',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    whatsappText:
      'Opa! Gostaria de saber mais sobre a noite de Caldos e Chopp em Dobro no Coyote.',
  },
  {
    id: 'sexta',
    dayShort: 'SEXTA',
    dayFull: 'TODA SEXTA-FEIRA',
    category: 'Música & Conexão',
    icon: QueueMusicOutlined,
    time: 'A partir das 19h30',
    title: 'SEXTA ACÚSTICA & RODADA DE SINUCA',
    description:
      'O som ao vivo toma conta do palco com o melhor do acústico regional e pop rock. Mesas de sinuca estalando, chapa cheia de petiscos e a galera reunida para abrir o fim de semana.',
    chalkNote: 'chega cedo pra garantir a mesa perto do palco!',
    stamp: 'ENTRADA LIBERADA',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    whatsappText:
      'Salve! Quero reservar uma mesa para curtir a Sexta Acústica no Coyote.',
  },
  {
    id: 'sabado-almoco',
    dayShort: 'SÁB • ALMOÇO',
    dayFull: 'SÁBADO AO MEIO-DIA',
    category: 'Tradição da Casa',
    icon: DinnerDiningOutlined,
    time: 'Das 11h30 às 15h00',
    title: 'A FAMOSA FEIJOADA COMPLETA DA DONA ANA',
    description:
      'Nosso almoço tradicional com buffet livre completo: feijoada preparada no capricho com todas as carnes, dobradinha, couve refogada, bisteca grelhada e saladas frescas.',
    chalkNote: 'a receita de família mais elogiada do CIC!',
    stamp: 'BUFFET LIVRE R$ 29,90',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    whatsappText:
      'Olá! Quero reservar mesa para o almoço de Feijoada no sábado no Coyote Bar.',
  },
  {
    id: 'sabado-noite',
    dayShort: 'SÁB • NOITE',
    dayFull: 'SÁBADO À NOITE',
    category: 'Comemorações & Shows',
    icon: SportsBarOutlined,
    time: 'A partir das 20h00',
    title: 'RODA DE PAGODE, MODÃO & FESTA',
    description:
      'A casa ferve com atrações ao vivo, torneiras de chopp artesanal e clima de pura celebração. O lugar onde aniversários, encontros e até casamentos já foram comemorados com muito brinde.',
    chalkNote: 'aniversariante ganha brinde da casa com a galera!',
    stamp: 'PALCO COYOTE',
    image:
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    whatsappText:
      'E aí! Quero comemorar meu aniversário no sábado à noite no Coyote.',
  },
];

export default function MonthlyEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const SLIDE_DURATION = 6000; // 6 segundos por dia

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WEEKLY_DAYS.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timerRef.current);
  }, [isPaused, activeIndex]);

  const activeDay = WEEKLY_DAYS[activeIndex];
  const ActiveIcon = activeDay.icon;

  return (
    <section
      className={styles.calendarSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="O Semanário do Coyote"
    >
      <div className={styles.container}>
        {/* Cabeçalho de Boteco */}
        <div className={styles.sectionHeader}>
          <div className={styles.tagLine}>
            <CalendarMonthOutlined fontSize="small" />
            <span>A ROTINA DA NOSSA CASA</span>
          </div>
          <h2 className={styles.title}>
            O SEMANÁRIO <span className={styles.highlight}>DO COYOTE</span>
          </h2>
          <p className={styles.subtitle}>
            De terça a sábado, o que tem na panela, no palco e nas torneiras. Escolha o dia ou deixe o tempo passar.
          </p>
        </div>

        {/* Régua de Dias da Semana com Timer de Progresso */}
        <div className={styles.daysTrack} role="tablist" aria-label="Dias da semana">
          {WEEKLY_DAYS.map((item, idx) => {
            const isSelected = idx === activeIndex;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.dayTab} ${isSelected ? styles.dayTabActive : ''}`}
                onClick={() => setActiveIndex(idx)}
                role="tab"
                aria-selected={isSelected}
              >
                <div className={styles.tabContent}>
                  <Icon className={styles.tabIcon} fontSize="small" />
                  <span className={styles.tabDay}>{item.dayShort}</span>
                </div>
                {/* Linha de Progresso do Autoplay */}
                <div className={styles.tabProgressBarTrack}>
                  <div
                    key={`${item.id}-${isSelected ? activeIndex : 'inactive'}`}
                    className={`
                      ${styles.tabProgressBar}
                      ${isSelected && !isPaused ? styles.tabProgressActive : ''}
                      ${isSelected && isPaused ? styles.tabProgressPaused : ''}
                    `}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Canvas do Dia Ativo (Sem Caixinhas Fechadas) */}
        <div className={styles.giantStage}>
          {/* Marca d'água gigante com o nome do dia */}
          <div className={styles.watermarkDay} aria-hidden="true">
            {activeDay.dayShort.split(' ')[0]}
          </div>

          <div className={styles.stageGrid}>
            {/* Imagem Real com Carimbo e Anotação de Giz */}
            <div className={styles.visualColumn}>
              <div className={styles.imageFrame}>
                <img
                  src={activeDay.image}
                  alt={activeDay.title}
                  className={styles.realPhoto}
                />
                <div className={styles.photoVignette} />
                <span className={styles.stampBadge}>{activeDay.stamp}</span>
                <span className={styles.chalkAnnotation}>"{activeDay.chalkNote}"</span>
              </div>
            </div>

            {/* Informações Vivas do Dia */}
            <div className={styles.infoColumn}>
              <div className={styles.metaBadgeRow}>
                <span className={styles.categoryBadge}>
                  <ActiveIcon fontSize="inherit" /> {activeDay.category}
                </span>
                <span className={styles.timeBadge}>
                  <AccessTimeOutlined fontSize="inherit" /> {activeDay.time}
                </span>
              </div>

              <span className={styles.fullDayLabel}>{activeDay.dayFull}</span>
              <h3 className={styles.dayMainTitle}>{activeDay.title}</h3>
              <p className={styles.dayDescription}>{activeDay.description}</p>

              <div className={styles.stageFooter}>
                <a
                  href={`https://wa.me/5541997683925?text=${encodeURIComponent(activeDay.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                >
                  <WhatsApp fontSize="small" />
                  <span>Garantir Mesa ou Saber Mais</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
