import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import Badge from '@components/ui/Badge';
import Button from '@components/ui/Button';
import styles from './LocationHero.module.css';

export default function LocationHero() {
  return (
    <section className={styles.locationHero}>
      <Badge variant="amber" icon={<PlaceOutlinedIcon fontSize="small" />}>
        Onde Estamos
      </Badge>

      <h1 className={styles.title}>Venha Viver a Experiência Coyote</h1>

      <p className={styles.subtitle}>
        Localizado no coração da CIC em Curitiba. O pub ideal para reunir amigos, jogar uma partida de sinuca e tomar um chopp gelado.
      </p>

      <div className={styles.actions}>
        <Button
          href="https://maps.google.com/?q=R.+Gastão+de+Abreu+Pires,+210+-+CIC,+Curitiba+-+PR"
          target="_blank"
          variant="primary"
          icon={<NavigationOutlinedIcon fontSize="small" />}
        >
          Abrir no Google Maps
        </Button>
      </div>
    </section>
  );
}
