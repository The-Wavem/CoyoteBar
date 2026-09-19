import React from 'react';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import Badge from '@components/ui/Badge';
import styles from './MenuHero.module.css';

export default function MenuHero() {
  return (
    <section className={styles.menuHero}>
      <Badge variant="amber" icon={<RestaurantMenuOutlinedIcon fontSize="small" />}>
        Cardápio Digital
      </Badge>

      <h1 className={styles.title}>Bebidas Geladas & Petiscos do Pub</h1>

      <p className={styles.subtitle}>
        Consulte as nossas opções diretamente da sua mesa. Cerveja na temperatura certa, receitas da casa e tudo o que você precisa para curtir a noite.
      </p>
    </section>
  );
}
