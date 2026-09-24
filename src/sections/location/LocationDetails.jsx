import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Card from '@components/ui/Card';
import styles from './LocationDetails.module.css';

export default function LocationDetails() {
  const highlights = [
    {
      title: 'Localização no CIC',
      description: 'R. Gastão de Abreu Pires, 210 - Cidade Industrial de Curitiba, PR. Ponto de fácil acesso na região.',
      icon: <PlaceOutlinedIcon />,
    },
    {
      title: 'Mesa de Sinuca & Jogos',
      description: 'Espaço com mesa de bilhar oficial, boa música, transmissão de jogos e ambiente descontraído.',
      icon: <SportsEsportsOutlinedIcon />,
    },
    {
      title: 'Estacionamento & Acesso',
      description: 'Vagas na via frontal e proximidade com vias principais para chegar e estacionar com tranquilidade.',
      icon: <DirectionsCarOutlinedIcon />,
    },
  ];

  return (
    <section className={styles.detailsSection}>
      <div className={styles.grid}>
        {highlights.map((item) => (
          <Card key={item.title} variant="default">
            <div className={styles.iconWrapper}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </Card>
        ))}
      </div>

      <Card variant="amber">
        <div className={styles.hoursBanner}>
          <div className={styles.hoursIcon}>
            <AccessTimeOutlinedIcon />
          </div>
          <div>
            <h3 className={styles.cardTitle}>Horário de Atendimento</h3>
            <p className={styles.cardDescription}>
              De Terça a Domingo das 18:00 às 02:00. Segunda-feira fechado para recarga de energia.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
