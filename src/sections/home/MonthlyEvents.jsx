import React, { useState } from 'react';
import {
  DinnerDiningOutlined,
  QueueMusicOutlined,
  SportsBarOutlined,
  SoupKitchenOutlined,
  WhatsApp,
  AccessTimeOutlined,
  LocalOfferOutlined,
  CelebrationOutlined,
} from '@mui/icons-material';
import styles from './MonthlyEvents.module.css';

const EVENTS_DATA = [
  {
    id: 'feijoada',
    day: 'Sábados ao Meio-Dia',
    time: '11h30 às 15h00',
    title: 'Feijoada Completa da Dona Ana',
    category: 'Gastronomia & Tradição',
    icon: DinnerDiningOutlined,
    shortDesc: 'Buffet livre com carnes selecionadas, torresmo crocante, dobradinha e acompanhamentos.',
    highlight: 'Buffet Livre R$ 29,90 por pessoa',
    handwrittenNote: 'receita tradicional de família!',
    badge: 'O Almoço Oficial do FDS',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    whatsappMessage: 'Olá! Gostaria de reservar uma mesa para o almoço de Feijoada no Coyote Bar.',
  },
  {
    id: 'happyhour',
    day: 'Terça a Quinta',
    time: 'A partir das 18h00',
    title: 'Caldos Quentinhos & Chopp em Dobro',
    category: 'Happy Hour & Aconchego',
    icon: SoupKitchenOutlined,
    shortDesc: 'Cumbucas de caldo caseiro servidas na hora para espantar o frio de Curitiba + Chopp em dobro.',
    highlight: 'Chopp Pilsen em Dobro até 20h',
    handwrittenNote: 'perfeito pra esquentar a noite!',
    badge: 'Temporada de Caldos',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre a noite de Caldos e Chopp em Dobro.',
  },
  {
    id: 'sexta',
    day: 'Toda Sexta-Feira',
    time: 'A partir das 19h30',
    title: 'Sexta Acústica & Rodada de Sinuca',
    category: 'Música & Conexão',
    icon: QueueMusicOutlined,
    shortDesc: 'Voz e violão no palco com o melhor do pop rock e sertanejo, mesas de sinuca e chapa tinindo.',
    highlight: 'Sinuca liberada + Petiscos na chapa',
    handwrittenNote: 'o ponto de encontro do sextou na CIC',
    badge: 'Música ao Vivo',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    whatsappMessage: 'Olá! Quero reservar uma mesa para curtir a Sexta Acústica no Coyote.',
  },
  {
    id: 'sabado-noite',
    day: 'Sábados à Noite',
    time: 'A partir das 20h00',
    title: 'Roda de Pagode & Modão Sertanejo',
    category: 'Festas & Comemorações',
    icon: SportsBarOutlined,
    shortDesc: 'Casa cheia, música ao vivo com convidados especiais e espaço para aniversários e casamentos.',
    highlight: 'Aniversariante da semana ganha brinde!',
    handwrittenNote: 'palco dos 2 casamentos mais famosos do bairro!',
    badge: 'Palco Aberto',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=80',
    whatsappMessage: 'Olá! Quero comemorar meu aniversário no Coyote Bar neste sábado.',
  },
];

export default function MonthlyEvents() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeEvent = EVENTS_DATA[selectedIdx];
  const ActiveIcon = activeEvent.icon;

  return (
    <section className={styles.section} aria-labelledby="live-events-heading">
      <div className={styles.header}>
        <h2 id="live-events-heading" className={styles.title}>
          O QUE TÁ ROLANDO NO <span className={styles.highlight}>PALCO & NA COZINHA</span>
        </h2>
        <p className={styles.subtitle}>
          Do almoço tradicional aos brindes da noite na CIC. Escolha o dia e viva a experiência de perto.
        </p>
      </div>

      <div className={styles.eventsWrapper}>
        {/* Coluna da Esquerda: Seletor Interativo */}
        <div className={styles.listCol} role="tablist" aria-label="Programação da semana">
          {EVENTS_DATA.map((evt, idx) => {
            const Icon = evt.icon;
            const isSelected = idx === selectedIdx;
            return (
              <div
                key={evt.id}
                className={`${styles.eventItem} ${isSelected ? styles.eventItemActive : ''}`}
                onMouseEnter={() => setSelectedIdx(idx)}
                onClick={() => setSelectedIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIdx(idx);
                  }
                }}
                role="tab"
                tabIndex={0}
                aria-selected={isSelected}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.itemDay}>{evt.day}</span>
                  <span className={styles.itemTime}>
                    <AccessTimeOutlined fontSize="inherit" />
                    {evt.time}
                  </span>
                </div>
                <div className={styles.itemBody}>
                  <div className={styles.iconCircle}>
                    <Icon fontSize="small" />
                  </div>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemTitle}>{evt.title}</h3>
                    <p className={styles.itemDesc}>{evt.shortDesc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coluna da Direita: Palco Visual com Foto Real e CTA */}
        <div className={styles.stageCol} aria-live="polite">
          <div className={styles.stageCard}>
            <div className={styles.imageFrame}>
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className={styles.stageImage}
              />
              <div className={styles.imageOverlay} />
              <span className={styles.handwrittenStamp}>{activeEvent.handwrittenNote}</span>
            </div>

            <div className={styles.stageDetails}>
              <div className={styles.stageCategory}>
                <ActiveIcon className={styles.categoryIcon} fontSize="small" />
                <span>
                  {activeEvent.category} • {activeEvent.day}
                </span>
              </div>

              <h3 className={styles.stageTitle}>{activeEvent.title}</h3>

              <div className={styles.highlightBox}>
                <LocalOfferOutlined className={styles.offerIcon} fontSize="small" />
                <span>{activeEvent.highlight}</span>
              </div>

              <div className={styles.stageActions}>
                <a
                  href={`https://wa.me/5541997683925?text=${encodeURIComponent(activeEvent.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reserveBtn}
                >
                  <WhatsApp fontSize="small" />
                  <span>Garantir Mesa ou Reservar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
