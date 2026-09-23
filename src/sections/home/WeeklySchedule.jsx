import React from 'react';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './WeeklySchedule.module.css';

const SCHEDULE = [
  {
    day: 'Terça a Quinta',
    title: 'Noite dos Caldos & Combos',
    time: 'A partir das 18h',
    description:
      'Caldos caseiros quentinhos servidos na cumbuca e promoções especiais na clássica Semana do X.',
    icon: <SoupKitchenOutlinedIcon />,
  },
  {
    day: 'Sexta-feira',
    title: 'Música ao Vivo & Sinuca',
    time: 'A partir das 19h30',
    description:
      'Pop rock e sertanejo acústico no palco, chopp trincando e o melhor ponto de encontro para abrir o final de semana.',
    icon: <QueueMusicOutlinedIcon />,
  },
  {
    day: 'Sábado • Almoço',
    title: 'Feijoada Completa da Ana',
    time: '11h30 às 15h00',
    description:
      'Buffet livre com a tradicional feijoada completa, carnes à vontade e guarnições caseiras para reunir família e amigos.',
    icon: <DinnerDiningOutlinedIcon />,
  },
  {
    day: 'Sábado • Noite',
    title: 'Roda de Pagode & Sertanejo',
    time: 'A partir das 20h00',
    description:
      'Shows ao vivo com artistas locais, ambiente vibrante, comemorações de aniversários e porções na chapa.',
    icon: <SportsBarOutlinedIcon />,
  },
];

export default function WeeklySchedule() {
  return (
    <section className={styles.section} aria-label="Programação Semanal do Coyote Bar">
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <div className={styles.tagline}>
            <EventNoteOutlinedIcon sx={{ fontSize: 16 }} />
            <span>Programação Semanal</span>
          </div>

          <h2 className={styles.title}>O que tá rolando na semana do Coyote</h2>
          <p className={styles.subtitle}>
            Do almoço executivo de terça ao pagode de sábado à noite, tem sempre boa comida, cerveja gelada e uma mesa te esperando.
          </p>
        </header>

        {/* 4-Moment Schedule Grid */}
        <div className={styles.grid}>
          {SCHEDULE.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{item.icon}</div>
                <span className={styles.dayBadge}>{item.day}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.cardTime}>{item.time}</span>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Support & Attendance Banner */}
        <div className={styles.supportBanner}>
          <div className={styles.supportInfo}>
            <div className={styles.supportIcon}>
              <HeadsetMicOutlinedIcon />
            </div>
            <p className={styles.supportText}>
              <span className={styles.supportHighlight}>Equipe conectada no ponto</span> para atendimento ágil na sua mesa. Vai comemorar aniversário ou reunir a galera? Manda um alô no Whats para garantir seu lugar.
            </p>
          </div>

          <a
            href="https://wa.me/5541997683925?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20para%20a%20programa%C3%A7%C3%A3o%20da%20semana."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsAppBtn}
          >
            <WhatsAppIcon fontSize="small" />
            Reservar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
