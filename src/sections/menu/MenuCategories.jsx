import React from 'react';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import Card from '@components/ui/Card';
import styles from './MenuCategories.module.css';

export default function MenuCategories() {
  const categories = [
    {
      title: 'Chopps & Cervejas',
      description: 'Pilsen trincando, IPAs artesanais, Weiss e rótulos selecionados para os apreciadores de um bom lúpulo.',
      icon: <SportsBarOutlinedIcon />,
      highlight: '6 Torneiras Ativas',
    },
    {
      title: 'Drinks do Coyote',
      description: 'Coquetéis autorais, clássicos como Gin Tônica, Caipirinhas especiais e shots para aquecer a noite.',
      icon: <LocalBarOutlinedIcon />,
      highlight: 'Carta Autoral',
    },
    {
      title: 'Petiscos & Porções',
      description: 'Batata rústica com cheddar e bacon, tábua de carnes, pastéis crocantes e petiscos de boteco autêntico.',
      icon: <FastfoodOutlinedIcon />,
      highlight: 'Para Compartilhar',
    },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.grid}>
        {categories.map((item) => (
          <Card key={item.title} variant="default">
            <div className={styles.iconWrapper}>{item.icon}</div>
            <h3 className={styles.categoryTitle}>{item.title}</h3>
            <p className={styles.categoryDescription}>{item.description}</p>
            <span className={styles.tag}>{item.highlight}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
