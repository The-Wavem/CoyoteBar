import React from 'react';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import styles from './MemoriesWall.module.css';

const MEMORIES = [
  {
    id: 1,
    className: styles.itemLarge,
    title: 'O Ponto de Encontro da CIC',
    tag: 'Amizades & Brindes',
    icon: <Diversity3OutlinedIcon sx={{ fontSize: 15 }} />,
    desc: 'Onde o fim de tarde vira noite sem ninguém perceber e as conversas fluem soltas no balcão.',
    image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Amigos brindando com chopps no balcão do Coyote',
  },
  {
    id: 2,
    className: styles.itemMedium,
    title: 'Acústico & Palco Aberto',
    tag: 'Música ao Vivo',
    icon: <QueueMusicOutlinedIcon sx={{ fontSize: 15 }} />,
    desc: 'Sextas e sábados com pop rock, modão e vozes que embalam o salão todo.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    alt: 'Show acústico de bar com violão',
  },
  {
    id: 3,
    className: styles.itemSmall1,
    title: 'O Estalo da Bola 8',
    tag: 'Mesa de Sinuca',
    icon: <SportsEsportsOutlinedIcon sx={{ fontSize: 15 }} />,
    desc: 'Partidas clássicas que decidem quem paga a próxima rodada de chopp.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    alt: 'Mesa de sinuca sob luz quente',
  },
  {
    id: 4,
    className: styles.itemSmall2,
    title: 'Chapa Quente & Porções Fartas',
    tag: 'Cozinha de Boteco',
    icon: <RestaurantOutlinedIcon sx={{ fontSize: 15 }} />,
    desc: 'Tulipas crocantes, batatas especiais e o tempero raiz que a galera adora.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    alt: 'Porções generosas de boteco servidas na mesa',
  },
  {
    id: 5,
    className: styles.itemSmall3,
    title: 'Celebrar é com a Gente',
    tag: 'Comemorações',
    icon: <CelebrationOutlinedIcon sx={{ fontSize: 15 }} />,
    desc: 'Aniversários, encontros de firma e até casamentos já foram festejados aqui.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    alt: 'Grupo de pessoas comemorando e sorrindo juntas',
  },
];

export default function MemoriesWall() {
  return (
    <section className={styles.wallSection} aria-labelledby="memories-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerArea}>
          <div className={styles.sectionBadge}>
            <Diversity3OutlinedIcon sx={{ fontSize: 16 }} />
            <span>Nossa Casa, Nossa Gente</span>
          </div>

          <h2 id="memories-heading" className={styles.sectionTitle}>
            8 anos de risadas, encontros e{' '}
            <span className={styles.amberGlow}>histórias reais</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            O Coyote não é apenas um endereço na CIC; é a extensão da sala de estar de quem vive a rotina de Curitiba. Um balcão sem pose, onde o chopp gelado aproxima mesas, desconhecidos viram parceiros de sinuca e as noites viram memórias para a vida toda.
          </p>

          <div className={styles.weddingHighlight}>
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 20, color: 'var(--accent-amber)' }} />
            <span>
              Um lugar com tanta conexão que já foi palco de amizades eternas e até de <strong>2 casamentos</strong> comemorados com muito brinde!
            </span>
          </div>
        </div>

        {/* Dynamic Mosaic Grid */}
        <div className={styles.mosaicGrid}>
          {MEMORIES.map((item) => (
            <div key={item.id} className={`${styles.mosaicItem} ${item.className}`}>
              <div className={styles.photoWrapper}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={styles.photoImg}
                  loading="lazy"
                />
                <div className={styles.photoOverlay}>
                  <span className={styles.photoTag}>
                    {item.icon}
                    {item.tag}
                  </span>
                  <h3 className={styles.photoTitle}>{item.title}</h3>
                  <p className={styles.photoDesc}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tradition Seal Banner */}
        <div className={styles.heritageBanner}>
          <div className={styles.heritageLeft}>
            <div className={styles.sealIconCircle}>
              <CelebrationOutlinedIcon sx={{ fontSize: 28 }} />
            </div>
            <div>
              <h3 className={styles.heritageTitle}>
                8 Anos de Tradição na CIC • Fundado em 2017
              </h3>
              <p className={styles.heritageSubtitle}>
                Histórias reais, amizades duradouras e o sabor autêntico de Curitiba.
              </p>
            </div>
          </div>

          <div className={styles.heritageRight}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>Anos no Bairro</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Casamentos Celebrados</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Alma de Boteco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
