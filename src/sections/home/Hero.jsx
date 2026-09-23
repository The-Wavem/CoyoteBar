import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import styles from './Hero.module.css';

const HERO_SLIDES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80',
    alt: 'Copos de chopp suando sobre mesa de madeira no Coyote Bar',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1920&q=80',
    alt: 'Pessoas reunidas rindo e conversando no bar à noite',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80',
    alt: 'Chapa quente estalando com petiscos e porções de boteco',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80',
    alt: 'Mesa de sinuca sob iluminação acolhedora de pub',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className={styles.heroSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Destaques do Coyote Bar"
    >
      {/* Top Filament Bulb Glow Effect */}
      <div className={styles.topLightBeam} aria-hidden="true" />

      {/* Background Slider with Crossfade Effect */}
      <div className={styles.sliderTrack} aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <img
              key={slide.id}
              src={slide.url}
              alt={slide.alt}
              className={`${styles.slideImage} ${isActive ? styles.slideActive : ''}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          );
        })}
      </div>

      {/* Atmospheric Dark Wood & Amber Gradient Overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Floating Content */}
      <div className={styles.heroContent}>
        {/* Handwritten Annotation in Caveat */}
        <span className={styles.handwrittenBadge}>o autêntico boteco da CIC</span>

        <h1 className={styles.mainTitle}>
          Onde cada brinde vira história e{' '}
          <span className={styles.amberGlow}>a noite nunca tem pressa.</span>
        </h1>

        <p className={styles.subtitle}>
          O boteco curitibano onde a chapa tá sempre quente, o chopp sempre trincando e os amigos nunca têm hora para ir embora.
        </p>

        <div className={styles.ctaGroup}>
          <Link to="/cardapio" className={styles.primaryBtn}>
            <RestaurantMenuOutlinedIcon sx={{ fontSize: 20 }} />
            <span>Acessar Cardápio Digital</span>
          </Link>

          <Link to="/local" className={styles.glassBtn}>
            <NearMeOutlinedIcon sx={{ fontSize: 20 }} />
            <span>Como Chegar</span>
          </Link>
        </div>

        {/* Retro Carimbo Stamp */}
        <div className={styles.retroStamp}>
          <span>Cerveja gelada</span>
          <span className={styles.stampDivider}>•</span>
          <span>Sinuca estalando</span>
          <span className={styles.stampDivider}>•</span>
          <span>Sabores de boteco</span>
          <span className={styles.stampDivider}>•</span>
          <span>Desde 2017</span>
        </div>
      </div>

      {/* Bottom Linear Progress Controls & Counter */}
      <div className={styles.bottomControls}>
        <div className={styles.progressTrack} role="tablist" aria-label="Controle de slides">
          {HERO_SLIDES.map((_, index) => {
            const isActive = index === currentSlide;
            const isPast = index < currentSlide;
            return (
              <button
                key={index}
                type="button"
                className={styles.dashBtn}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
                aria-selected={isActive}
                role="tab"
              >
                <div
                  key={`${index}-${isActive ? currentSlide : 'inactive'}`}
                  className={`
                    ${styles.dashFill}
                    ${isActive ? styles.dashActive : ''}
                    ${isActive && isPaused ? styles.dashPaused : ''}
                  `}
                  style={{
                    width: isPast ? '100%' : !isActive ? '0%' : undefined,
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className={styles.slideCounter} aria-live="polite">
          <span className={styles.counterCurrent}>0{currentSlide + 1}</span> / 0{HERO_SLIDES.length}
        </div>
      </div>
    </section>
  );
}
