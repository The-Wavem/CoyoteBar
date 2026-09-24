import React from 'react';
import {
  WhatsApp,
  ConfirmationNumberOutlined,
  PlaceOutlined,
  AccessTimeOutlined,
} from '@mui/icons-material';
import styles from './UpcomingShows.module.css';

const SHOWS = [
  {
    id: 'halloween',
    badge: 'FESTA TEMÁTICA DA CASA',
    title: 'HALLOWEEN DO COYOTE',
    subtitle: 'ROCK, FANTASIA & LOUCURA',
    date: '31 OUT',
    dayOfWeek: 'QUINTA',
    time: 'A partir das 19h00',
    location: 'Palco Coyote • CIC',
    description: 'A noite mais insana do ano com a casa decorada, clássicos do rock e chopp verde na torneira.',
    stamp: 'FANTASIADO = 1º CHOPP GRÁTIS',
    handwritten: 'capricha na fantasia que a primeira caneca é nossa!',
    featured: true,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    whatsappMessage: 'Fala galera do Coyote! Quero garantir mesa pro Halloween do Coyote.',
  },
  {
    id: 'rock-nacional',
    badge: 'SEXTA ACÚSTICA',
    title: 'NOITE DO ROCK & POP NACIONAL',
    subtitle: 'OS CLÁSSICOS DOS ANOS 80, 90 E 2000',
    date: '14 NOV',
    dayOfWeek: 'SEXTA-FEIRA',
    time: 'A partir das 20h00',
    location: 'Palco Principal',
    description: 'Voz e violão rasgado no palco, porções na chapa e aquela energia pra cantar até ficar rouco.',
    stamp: 'ENTRADA LIVRE',
    handwritten: 'aquele pra cantar junto com a caneca cheia!',
    featured: false,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Salve! Quero reservar pro show de Rock Nacional no Coyote.',
  },
  {
    id: 'pagode-chopp',
    badge: 'SÁBADO DA GALERA',
    title: 'RODA DE PAGODE & CHOPP ARTESANAL',
    subtitle: 'SAMBA, MODÃO & MESAS DE SINUCA',
    date: '22 NOV',
    dayOfWeek: 'SÁBADO',
    time: 'A partir das 19h30',
    location: 'Área Coberta & Sinuca',
    description: 'Clima quente de boteco, mesa cheia de amigos e rodadas de chopp trincando.',
    stamp: 'ANIVERSARIANTE VIP',
    handwritten: 'traz o bolo que o brinde da mesa é por conta da casa!',
    featured: false,
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Opa! Gostaria de reservar mesa pra comemorar aniversário no sábado do pagode.',
  },
];

export default function UpcomingShows() {
  return (
    <section className={styles.wallSection} aria-labelledby="shows-wall-heading">
      {/* Tipografia de Fundo (Watermark de Rua) */}
      <div className={styles.backgroundGraffiti} aria-hidden="true">
        <span>AO VIVO // PALCO COYOTE // CIC</span>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerTag}>
            <ConfirmationNumberOutlined fontSize="small" />
            <span>MURAL DE ATRAÇÕES & DATAS ESPECIAIS</span>
          </div>
          <h2 id="shows-wall-heading" className={styles.sectionTitle}>
            OS DIAS EM QUE A <span className={styles.highlight}>CASA FERVE</span>
          </h2>
          <p className={styles.sectionSub}>
            Cartazes colados na parede do bar: escolha a data, junte a tropa e reserve sua mesa direto no WhatsApp.
          </p>
        </div>

        {/* Mural de Cartazes Sobrepostos (Lambe-Lambe Layout) */}
        <div className={styles.postersWall}>
          {/* Cartaz 1: Gigante em Destaque com Fita Crepe */}
          <article className={`${styles.posterCard} ${styles.posterMain}`}>
            <div className={styles.tapeTop} />
            <div className={styles.tapeBottom} />

            <div className={styles.posterVisual}>
              <img src={SHOWS[0].image} alt={SHOWS[0].title} className={styles.posterImg} />
              <div className={styles.posterDarkMask} />
              <div className={styles.dateTagBig}>
                <span className={styles.dateDay}>{SHOWS[0].date}</span>
                <span className={styles.dateWeek}>{SHOWS[0].dayOfWeek}</span>
              </div>
              <span className={styles.stampHot}>{SHOWS[0].stamp}</span>
            </div>

            <div className={styles.posterContent}>
              <span className={styles.badgeLine}>{SHOWS[0].badge}</span>
              <h3 className={styles.mainTitle}>{SHOWS[0].title}</h3>
              <h4 className={styles.mainSubtitle}>{SHOWS[0].subtitle}</h4>
              <p className={styles.mainDesc}>{SHOWS[0].description}</p>

              <div className={styles.metaRow}>
                <span>
                  <AccessTimeOutlined fontSize="inherit" /> {SHOWS[0].time}
                </span>
                <span>
                  <PlaceOutlined fontSize="inherit" /> {SHOWS[0].location}
                </span>
              </div>

              <p className={styles.handwrittenNote}>"{SHOWS[0].handwritten}"</p>

              <a
                href={`https://wa.me/5541997683925?text=${encodeURIComponent(SHOWS[0].whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtnLarge}
              >
                <WhatsApp fontSize="small" />
                <span>GARANTIR MESA / BANCADA</span>
              </a>
            </div>
          </article>

          {/* Coluna dos Cartazes Secundários Sobrepostos */}
          <div className={styles.secondaryPostersCol}>
            {SHOWS.slice(1).map((show, idx) => (
              <article
                key={show.id}
                className={`${styles.posterCard} ${styles.posterSecondary} ${
                  idx === 0 ? styles.tiltRight : styles.tiltLeft
                }`}
              >
                <div className={styles.tapeCorner} />

                <div className={styles.secondaryHeader}>
                  <div className={styles.dateBadgeSmall}>
                    <span className={styles.dateSmallNumber}>{show.date.split(' ')[0]}</span>
                    <span className={styles.dateSmallMonth}>{show.date.split(' ')[1]}</span>
                  </div>
                  <div className={styles.secondaryTitleBox}>
                    <span className={styles.secondaryBadge}>{show.badge}</span>
                    <h3 className={styles.secondaryTitle}>{show.title}</h3>
                    <p className={styles.secondarySubtitle}>{show.subtitle}</p>
                  </div>
                </div>

                <p className={styles.secondaryDesc}>{show.description}</p>
                <span className={styles.secondaryHandwritten}>"{show.handwritten}"</span>

                <div className={styles.secondaryFooter}>
                  <span className={styles.secondaryStamp}>{show.stamp}</span>
                  <a
                    href={`https://wa.me/5541997683925?text=${encodeURIComponent(show.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryBtn}
                  >
                    <WhatsApp fontSize="inherit" />
                    <span>Reservar Mesa</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
