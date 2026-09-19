import React from 'react';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Badge from '@components/ui/Badge';
import Button from '@components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>

      <h1 className={styles.title}>
        Mais que Bebidas, <span className={styles.titleHighlight}>Servindo Memórias</span>
      </h1>

      <p className={styles.subtitle}>
        O pub do lobo na Cidade Industrial de Curitiba. Ambiente acolhedor, chopps trincando, mesa de sinuca e petiscos de verdade.
      </p>

      <div className={styles.ctaGroup}>
        <Button
          to="/cardapio"
          variant="amber"
          size="lg"
          icon={<RestaurantMenuOutlinedIcon fontSize="small" />}
        >
          Ver Cardápio
          <ArrowForwardOutlinedIcon fontSize="small" />
        </Button>

        <Button
          to="/local"
          variant="outline"
          size="lg"
          icon={<PlaceOutlinedIcon fontSize="small" />}
        >
          Como Chegar
        </Button>
      </div>
    </section>
  );
}
