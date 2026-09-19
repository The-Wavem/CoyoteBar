import React from 'react';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import Card from '@components/ui/Card';
import styles from './Features.module.css';

export default function Features() {
  const highlights = [
    
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.grid}>
        {highlights.map((item) => (
          <Card key={item.title} variant="default">
            <div className={styles.iconWrapper}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
