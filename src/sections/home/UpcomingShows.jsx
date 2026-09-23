import React from 'react';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styles from './UpcomingShows.module.css';

const FEATURED_SHOW = {
  dateMonth: 'OUT',
  dateDay: '31',
  dateWeekday: 'QUI',
  title: 'HALLOWEEN DO COYOTE • ROCK & FANTASIA',
  time: 'A partir das 19h00',
  stage: 'Palco Principal',
  perkTitle: 'Venha fantasiado e o 1º chopp é na faixa!',
  handwrittenPerk: 'capricha na fantasia que a primeira caneca é por nossa conta!',
  image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  whatsappMessage: 'Olá! Quero garantir minha mesa para o Halloween do Coyote (31/10)!',
};

const UPCOMING_LIST = [
  {
    id: 1,
    dateMonth: 'NOV',
    dateDay: '14',
    dateWeekday: 'SEX',
    title: 'NOITE DO ROCK & POP NACIONAL',
    desc: 'Acústico ao vivo no palco com os clássicos dos anos 80, 90 e 2000.',
    perk: 'Aquele som pra cantar junto com a caneca cheia',
    whatsappMessage: 'Olá! Gostaria de reservar uma mesa para a Noite do Rock (14/11).',
  },
  {
    id: 2,
    dateMonth: 'NOV',
    dateDay: '22',
    dateWeekday: 'SÁB',
    title: 'PAGODE & CHOPP ARTESANAL',
    desc: 'Roda de samba e modão para reunir a galera e celebrar aniversários.',
    perk: 'Aniversariante com reserva ganha brinde da casa!',
    whatsappMessage: 'Olá! Quero reservar mesa para o Pagode de Sábado (22/11).',
  },
  {
    id: 3,
    dateMonth: 'DEZ',
    dateDay: '05',
    dateWeekday: 'SEX',
    title: 'FESTIVAL DE CHOPP & MODÃO',
    desc: 'Torneiras artesanais abertas, porções na chapa e modão raiz no palco.',
    perk: 'Double de Chopp Pilsen até as 20h',
    whatsappMessage: 'Olá! Quero reservar mesa para o Festival de Chopp (05/12).',
  },
];

export default function UpcomingShows() {
  return (
    <section className={styles.section} aria-labelledby="shows-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerArea}>

          <h2 id="shows-heading" className={styles.title}>
            Próximos Shows & <span className={styles.highlight}>Noites Especiais</span>
          </h2>

          <p className={styles.subtitle}>
            Os dias em que a casa ferve, o som rola solto e a gente prepara algo com o coração pra quem cola junto. Escolha a data e venha viver a noite de perto.
          </p>
        </div>

        {/* Shows Grid */}
        <div className={styles.showsGrid}>
          {/* Featured Spotlight Card */}
          <article className={styles.featuredCard}>
            <div className={styles.featuredBg}>
              <img
                src={FEATURED_SHOW.image}
                alt={FEATURED_SHOW.title}
                className={styles.featuredImage}
                loading="lazy"
              />
              <div className={styles.featuredOverlay} />
            </div>

            <div className={styles.featuredTop}>
              <span className={styles.spotlightPill}>
                <LocalActivityOutlinedIcon sx={{ fontSize: 15 }} />
                <span>Destaque do Mês</span>
              </span>

              {/* Big Impact Date Block */}
              <div className={styles.dateBlock} aria-label="Data do show: 31 de Outubro">
                <span className={styles.dateMonth}>{FEATURED_SHOW.dateMonth}</span>
                <span className={styles.dateDay}>{FEATURED_SHOW.dateDay}</span>
                <span className={styles.dateWeekday}>{FEATURED_SHOW.dateWeekday}</span>
              </div>
            </div>

            <div className={styles.featuredBottom}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredMetaItem}>
                  <AccessTimeOutlinedIcon sx={{ fontSize: 15 }} />
                  {FEATURED_SHOW.time}
                </span>
                <span>•</span>
                <span>{FEATURED_SHOW.stage}</span>
                <span>•</span>
                <span>Entrada Livre</span>
              </div>

              <h3 className={styles.featuredTitle}>{FEATURED_SHOW.title}</h3>

              {/* Heart of the pub perk */}
              <div className={styles.perkBox}>
                <div className={styles.perkTitle}>
                  <SportsBarOutlinedIcon sx={{ fontSize: 18, color: 'var(--accent-amber)' }} />
                  <span>{FEATURED_SHOW.perkTitle}</span>
                </div>
                <p className={styles.handwrittenPerk}>
                  "{FEATURED_SHOW.handwrittenPerk}"
                </p>
              </div>

              <a
                href={`https://wa.me/5541997683925?text=${encodeURIComponent(FEATURED_SHOW.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtnPrimary}
              >
                <WhatsAppIcon sx={{ fontSize: 20 }} />
                <span>Garantir Mesa no WhatsApp</span>
              </a>
            </div>
          </article>

          {/* Secondary Upcoming Shows Column */}
          <div className={styles.secondaryCol}>
            {UPCOMING_LIST.map((show) => (
              <div key={show.id} className={styles.showRow}>
                {/* Compact Date Block */}
                <div className={styles.dateBlockSmall}>
                  <span className={styles.dateMonth}>{show.dateMonth}</span>
                  <span className={styles.dateDay}>{show.dateDay}</span>
                  <span className={styles.dateWeekday}>{show.dateWeekday}</span>
                </div>

                <div className={styles.showInfo}>
                  <h4 className={styles.showTitle}>{show.title}</h4>
                  <p className={styles.showDesc}>{show.desc}</p>
                  <span className={styles.showPerk}>"{show.perk}"</span>
                </div>

                <a
                  href={`https://wa.me/5541997683925?text=${encodeURIComponent(show.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reserveBtnOutline}
                >
                  <WhatsAppIcon sx={{ fontSize: 16 }} />
                  <span>Reservar</span>
                  <ArrowForwardOutlinedIcon sx={{ fontSize: 14 }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
