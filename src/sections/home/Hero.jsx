import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import styles from './Hero.module.css';

const HERO_SLIDES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80',
    alt: 'Balcão de bar e chopp gelado no Coyote Bar',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80',
    alt: 'Carnes e porções na brasa',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1920&q=80',
    alt: 'Luzes quentes e noite com música ao vivo',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80',
    alt: 'Buffet farto e comida caseira no almoço da CIC',
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

      {/* Atmospheric Dark & Amber Gradient Overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Floating Content */}
      <div className={styles.heroContent}>
        <div className={styles.badge}>
          <PlaceOutlinedIcon sx={{ fontSize: 16 }} />
          <span>Coyote Bar — Desde 2017 • CIC Curitiba</span>
        </div>

        <h1 className={styles.mainTitle}>
          Servindo mais que bebidas.{' '}
          <span className={styles.amberGlow}>Servindo memórias.</span>
        </h1>

        <p className={styles.subtitle}>
          O boteco curitibano onde a chapa tá sempre quente, o chopp sempre trincando e a noite nunca tem hora para acabar.
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
