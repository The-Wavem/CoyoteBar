import React, { useState, useEffect, useCallback } from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Button from '@components/ui/Button';
import styles from './Hero.module.css';

const SLIDES = [
  {
    tag: 'Almoço na CIC',
    icon: <LunchDiningOutlinedIcon sx={{ fontSize: 16 }} />,
    title: 'Buffet Livre & Sabores Caseiros',
    description: 'Comida farta e feita no capricho para reunir amigos e colegas de trabalho.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Para Espantar o Frio',
    icon: <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 16 }} />,
    title: 'Caldos Quentes & Noites Aconchegantes',
    description: 'Receitas especiais servidas bem quentes na nossa área coberta e quentinha.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Na Chapa & No Ponto',
    icon: <RestaurantOutlinedIcon sx={{ fontSize: 16 }} />,
    title: 'Porções Generosas & Lanches Artesanais',
    description: 'Tulipas crocantes, batatas temperadas e hambúrgueres para dividir na mesa.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Clima de Boteco',
    icon: <NightlifeOutlinedIcon sx={{ fontSize: 16 }} />,
    title: 'Música ao Vivo, Chopp & Sinuca',
    description: '8 anos sendo a casa dos melhores encontros e celebrações em Curitiba.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className={styles.heroContainer}>
      {/* Top Center Masthead / Elegant Brand Title */}
      <div className={styles.topMasthead}>
        <div className={styles.mastheadLine} />
        <div className={styles.mastheadContent}>
          <span className={styles.mastheadTagline}>
            <PlaceOutlinedIcon sx={{ fontSize: 13 }} />
            SINCE 2017 • CIDADE INDUSTRIAL DE CURITIBA
          </span>
          <h2 className={styles.mastheadTitle}>
            COYOTE <span className={styles.mastheadAccent}>BAR</span>
          </h2>
        </div>
        <div className={styles.mastheadLine} />
      </div>

      <div className={styles.heroContent}>
        {/* Left Column (Desktop: Order 1; Mobile: Order 2) */}
        <div className={styles.leftCol}>
          <h1 className={styles.mainTitle}>
            Onde cada brinde vira história e{' '}
            <span className={styles.amberGlow}>a noite nunca tem pressa.</span>
          </h1>

          <p className={styles.description}>
            A energia autêntica de um pub de bairro: chopes trincando, o estalo das bolas na mesa de sinuca, boa música e a clássica culinária de boteco feita com alma.
          </p>

          <div className={styles.ctaRow}>
            <Button
              to="/cardapio"
              variant="amber"
              size="lg"
              icon={<RestaurantMenuOutlinedIcon fontSize="small" />}
              className={styles.primaryCta}
            >
              Explorar Cardápio
            </Button>
            <Button
              to="/local"
              variant="outline"
              size="lg"
              icon={<ExploreOutlinedIcon fontSize="small" />}
              className={styles.secondaryCta}
            >
              Conhecer o Espaço
            </Button>
          </div>

          {/* Micro-indicators */}
          <div className={styles.indicatorsRow}>
            <div className={styles.indicatorItem}>
              <span className={styles.indicatorValue}>8 Anos</span>
              <span className={styles.indicatorLabel}>Histórias & Memórias</span>
            </div>

            <div className={styles.indicatorDivider} />

            <div className={styles.indicatorItem}>
              <span className={styles.indicatorValue}>Música & Jogos</span>
              <span className={styles.indicatorLabel}>Sextas e Sábados</span>
            </div>

            <div className={styles.indicatorDivider} />

            <div className={styles.indicatorItem}>
              <span className={styles.indicatorValue}>Almoço Diário</span>
              <span className={styles.indicatorLabel}>Buffet & Marmitex</span>
            </div>
          </div>
        </div>

        {/* Right Column (Desktop: Order 2; Mobile: Order 1 / Full-Bleed) */}
        <div
          className={styles.carouselFrame}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Destaques do Coyote Bar"
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            className={`${styles.navArrow} ${styles.navPrev}`}
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            <ChevronLeftOutlinedIcon />
          </button>
          <button
            type="button"
            className={`${styles.navArrow} ${styles.navNext}`}
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            <ChevronRightOutlinedIcon />
          </button>

          {/* Slides Track */}
          <div className={styles.slideTrack}>
            {SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.title}
                  className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={styles.slideImage}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className={styles.slideOverlay}>
                    <span className={styles.slideTag}>
                      {slide.icon}
                      {slide.tag}
                    </span>
                    <h2 className={styles.slideTitle}>{slide.title}</h2>
                    <p className={styles.slideDescription}>{slide.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Linear Progress Bar (Dashes) */}
          <div className={styles.progressContainer}>
            {SLIDES.map((_, index) => {
              const isActive = index === currentSlide;
              const isPast = index < currentSlide;
              return (
                <button
                  key={index}
                  type="button"
                  className={styles.dashBtn}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir para o slide ${index + 1}`}
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
        </div>
      </div>
    </section>
  );
}
