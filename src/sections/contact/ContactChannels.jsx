import React from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import styles from './ContactChannels.module.css';

export default function ContactChannels() {
  const contactChannels = [
    {
      title: 'WhatsApp de Reservas',
      description: 'Garanta sua mesa para aniversários, reuniões de amigos ou eventos fechados.',
      actionText: 'Conversar no WhatsApp',
      actionHref: 'https://wa.me/5541999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Coyote%20Bar.',
      icon: <WhatsAppIcon />,
      isAmber: true,
    },
    {
      title: 'Instagram Oficial',
      description: 'Acompanhe a programação semanal de bandas, promoções do dia e novidades.',
      actionText: 'Seguir @coyotebar',
      actionHref: 'https://instagram.com',
      icon: <InstagramIcon />,
      isAmber: false,
    },
    {
      title: 'Atendimento Direto',
      description: 'Dúvidas sobre o cardápio, achados e perdidos ou parcerias comerciais.',
      actionText: 'Ligar para o Pub',
      actionHref: 'tel:+5541999999999',
      icon: <CallOutlinedIcon />,
      isAmber: false,
    },
  ];

  return (
    <section className={styles.channelsSection}>
      <div className={styles.grid}>
        {contactChannels.map((item) => (
          <Card key={item.title} variant="default">
            <div className={`${styles.iconWrapper} ${item.isAmber ? styles.iconAmber : ''}`}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
            <Button
              href={item.actionHref}
              target="_blank"
              variant={item.isAmber ? 'amber' : 'primary'}
              icon={item.icon}
              style={{ marginTop: 'auto' }}
            >
              {item.actionText}
            </Button>
          </Card>
        ))}
      </div>

      <Card variant="accent">
        <div className={styles.infoCardGrid}>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <AccessTimeOutlinedIcon />
            </div>
            <div>
              <h4 className={styles.cardTitle}>Horário de Funcionamento</h4>
              <p className={styles.cardDescription} style={{ margin: 0 }}>
                Terça a Domingo: 18:00 às 02:00
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={`${styles.iconWrapper} ${styles.iconAmber}`}>
              <CalendarMonthOutlinedIcon />
            </div>
            <div>
              <h4 className={styles.cardTitle}>Eventos & Aniversários</h4>
              <p className={styles.cardDescription} style={{ margin: 0 }}>
                Reserve com antecedência para condições especiais.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
