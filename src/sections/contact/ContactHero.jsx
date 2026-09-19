import React from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Badge from '@components/ui/Badge';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.contactHero}>
      <Badge variant="amber" icon={<CallOutlinedIcon fontSize="small" />}>
        Fale Conosco
      </Badge>

      <h1 className={styles.title}>Reservas, Eventos & Informações</h1>

      <p className={styles.subtitle}>
        Estamos prontos para receber você e sua turma. Entre em contato para reservas de mesas, comemorações de aniversário ou dúvidas.
      </p>
    </section>
  );
}
