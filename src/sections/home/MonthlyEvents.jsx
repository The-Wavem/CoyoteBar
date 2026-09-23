import React from 'react';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './MonthlyEvents.module.css';

const LINEUP = [
  {
    id: 1,
    day: 'Sábados ao Meio-Dia',
    time: 'Das 11h30 às 15h00',
    title: 'Feijoada Completa & Buffet Livre',
    description: 'O almoço oficial do fim de semana com carnes à vontade e acompanhamentos caseiros.',
    icon: <DinnerDiningOutlinedIcon sx={{ fontSize: 20 }} />,
    actionLabel: 'Ver Detalhes',
  },
  {
    id: 2,
    day: 'Toda Sexta-Feira',
    time: 'A partir das 19h30',
    title: 'Acústico de Sexta & Rodada de Sinuca',
    description: 'Pop rock, sertanejo e as melhores porções na chapa para abrir o final de semana.',
    icon: <QueueMusicOutlinedIcon sx={{ fontSize: 20 }} />,
    actionLabel: 'Música ao Vivo',
  },
  {
    id: 3,
    day: 'Sábados à Noite',
    time: 'A partir das 20h00',
    title: 'Noite do Pagode & Modão Sertanejo',
    description: 'Palco aberto, música ao vivo, comemorações e casa cheia para cantar junto.',
    icon: <SportsBarOutlinedIcon sx={{ fontSize: 20 }} />,
    actionLabel: 'Festa & Brinde',
  },
  {
    id: 4,
    day: 'Terça a Quinta',
    time: 'A partir das 18h00',
    title: 'Temporada de Caldos Quentinhos & Combos',
    description: 'Para espantar o frio de Curitiba com comida de verdade servida na cumbuca.',
    icon: <SoupKitchenOutlinedIcon sx={{ fontSize: 20 }} />,
    actionLabel: 'Caldos da Casa',
  },
];

export default function MonthlyEvents() {
  return (
    <section className={styles.eventsSection} aria-labelledby="lineup-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerArea}>
          <div className={styles.sectionBadge}>
            <EventAvailableOutlinedIcon sx={{ fontSize: 16 }} />
            <span>Programação & Festas</span>
          </div>

          <h2 id="lineup-heading" className={styles.sectionTitle}>
            O que tá rolando no{' '}
            <span className={styles.amberGlow}>palco do Coyote</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            Do almoço tradicional em família aos shows ao vivo que agitam a noite da CIC. Confira o cartaz fixo da casa e marque na sua agenda.
          </p>
        </div>

        {/* Poster Line-up List */}
        <div className={styles.lineupList} role="list">
          {LINEUP.map((item) => (
            <div key={item.id} className={styles.lineupRow} role="listitem">
              <div className={styles.dayCol}>
                <span className={styles.dayTag}>{item.day}</span>
                <span className={styles.timeTag}>
                  <AccessTimeOutlinedIcon sx={{ fontSize: 14 }} />
                  {item.time}
                </span>
              </div>

              <div className={styles.attractionCol}>
                <div className={styles.attractionTitle}>
                  <span className={styles.attractionIcon}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <p className={styles.attractionDesc}>{item.description}</p>
              </div>

              <div className={styles.actionCol}>
                <span className={styles.actionBadge}>
                  <span>{item.actionLabel}</span>
                  <ArrowForwardOutlinedIcon sx={{ fontSize: 14 }} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reservation Callout Banner */}
        <div className={styles.reservationBanner}>
          <div className={styles.reservationContent}>
            <h3 className={styles.reservationTitle}>
              Vai comemorar aniversário ou juntar a galera?
            </h3>
            <p className={styles.reservationText}>
              Garanta sua mesa com antecedência direto com a gente e aproveite a noite sem filas.
            </p>
          </div>

          <a
            href="https://wa.me/5541997683925?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Coyote%20Bar."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <WhatsAppIcon sx={{ fontSize: 20 }} />
            <span>Reservar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
