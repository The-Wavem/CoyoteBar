import React, { useState } from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Button from '@components/ui/Button';
import styles from './DayNightExperience.module.css';

const EXPERIENCES = {
  day: {
    badge: 'Tradição do Meio-Dia na CIC',
    badgeIcon: <RestaurantOutlinedIcon sx={{ fontSize: 16 }} />,
    title: 'Comida caseira farta, do jeito que o curitibano gosta.',
    description:
      'O almoço de respeito na Cidade Industrial: carnes selecionadas na brasa, buffet variado com comida de verdade e aquele atendimento que faz você se sentir em casa.',
    highlights: [
      {
        title: 'Buffet Livre a partir de R$ 29,90',
        sub: 'Carnes grelhadas na hora, guarnições fartas, massas e saladas frescas.',
      },
      {
        title: 'Sábados com a Famosa Feijoada Completa',
        sub: 'Feijoada tradicional com todos os pertences, carnes à vontade e acompanhamentos de boteco.',
      },
      {
        title: 'Marmitex Executivo Preparado na Hora',
        sub: 'Montado no capricho para retirada rápida ou pedido direto pelo WhatsApp.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    imagePill: 'Segunda a Sábado • A partir das 11h30',
    imageCaption: 'Buffet livre com carnes na chapa',
    primaryCtaText: 'Consultar Cardápio do Almoço',
    primaryCtaLink: '/cardapio',
    secondaryCtaText: 'Pedir Marmitex',
    secondaryCtaLink:
      'https://wa.me/5541997683925?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20marmitex%20no%20Coyote%20Bar.',
  },
  night: {
    badge: 'Noites no Coyote',
    badgeIcon: <LocalBarOutlinedIcon sx={{ fontSize: 16 }} />,
    title: 'Chapa quente, chopp trincando e sinuca estalando.',
    description:
      'O autêntico clima de boteco: a galera reunida ao redor da mesa de bilhar, som ao vivo no palco e porções generosas para dividir com quem você gosta.',
    highlights: [
      {
        title: 'Porções Generosas & Lanches Artesanais',
        sub: 'Tulipas crocantes, batatas rústicas com cheddar e bacon, aipim e iscas de carne na chapa.',
      },
      {
        title: 'Temporada de Caldos Quentinhos',
        sub: 'Caldos reconfortantes servidos bem quentes para espantar o frio de Curitiba.',
      },
      {
        title: 'Chopp Artesanal, Drinques & Sinuca',
        sub: 'Torneiras ativas, cervejas sempre geladas e mesas oficiais de bilhar para desafiar os amigos.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    imagePill: 'Terça a Domingo • A partir das 18h',
    imageCaption: 'Chopp trincando e música de pub',
    primaryCtaText: 'Ver Porções & Bebidas',
    primaryCtaLink: '/cardapio',
    secondaryCtaText: 'Reservar Mesa',
    secondaryCtaLink:
      'https://wa.me/5541997683925?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Coyote%20Bar.',
  },
};

export default function DayNightExperience() {
  const [activeMode, setActiveMode] = useState('day');
  const exp = EXPERIENCES[activeMode];

  return (
    <section className={styles.section} aria-label="Experiência Dia e Noite">
      <div className={styles.container}>
        {/* Atmosphere Selector Toggle */}
        <div className={styles.toggleWrapper} role="tablist" aria-label="Seletor de Clima">
          <button
            type="button"
            role="tab"
            aria-selected={activeMode === 'day'}
            className={`${styles.toggleBtn} ${activeMode === 'day' ? styles.toggleActive : ''}`}
            onClick={() => setActiveMode('day')}
          >
            <WbSunnyOutlinedIcon fontSize="small" />
            Almoço & Buffet (Dia)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeMode === 'night'}
            className={`${styles.toggleBtn} ${activeMode === 'night' ? styles.toggleActive : ''}`}
            onClick={() => setActiveMode('night')}
          >
            <NightlifeOutlinedIcon fontSize="small" />
            Boteco & Música (Noite)
          </button>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Text & Highlights */}
          <div className={styles.textContent}>
            <div className={styles.badge}>
              {exp.badgeIcon}
              <span>{exp.badge}</span>
            </div>

            <h2 className={styles.title}>{exp.title}</h2>
            <p className={styles.description}>{exp.description}</p>

            <div className={styles.highlightsList}>
              {exp.highlights.map((item) => (
                <div key={item.title} className={styles.highlightItem}>
                  <div className={styles.highlightDot}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 14 }} />
                  </div>
                  <div className={styles.highlightText}>
                    <span className={styles.highlightTitle}>{item.title}</span>
                    <span className={styles.highlightSub}>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actionsRow}>
              <Button
                to={exp.primaryCtaLink}
                variant="amber"
                size="md"
                icon={<ArrowForwardOutlinedIcon fontSize="small" />}
              >
                {exp.primaryCtaText}
              </Button>
              <Button
                href={exp.secondaryCtaLink}
                target="_blank"
                variant="outline"
                size="md"
                icon={<WhatsAppIcon fontSize="small" />}
              >
                {exp.secondaryCtaText}
              </Button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className={styles.imageFrame}>
            <img
              src={exp.image}
              alt={exp.title}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imagePill}>{exp.imagePill}</span>
              <p className={styles.imageCaption}>{exp.imageCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
