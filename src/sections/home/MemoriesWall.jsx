import React from 'react';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import CoyoteWatcher from '@components/common/CoyoteWatcher';
import styles from './MemoriesWall.module.css';

const POLAROIDS = [
  {
    id: 1,
    rotationClass: styles.rotateLeft,
    note: 'Sextou com a turma no balcão',
    tag: 'Chopp & Amigos',
    date: 'Sexta à noite',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    alt: 'Amigos brindando copos de chopp em mesa de madeira',
  },
  {
    id: 2,
    rotationClass: styles.rotateRight,
    note: 'Final do campeonato de sinuca do CIC',
    tag: 'Mesa de Bilhar',
    date: 'Quinta dos amigos',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    alt: 'Taco e bolas de sinuca sob a lâmpada do Coyote',
  },
  {
    id: 3,
    rotationClass: styles.rotateSlightLeft,
    note: 'Pop rock e modão com a casa cantando junto',
    tag: 'Música ao Vivo',
    date: 'Sábado no palco',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    alt: 'Músico com violão tocando ao vivo no bar',
  },
  {
    id: 4,
    rotationClass: styles.rotateSlightRight,
    note: 'Aquela tulipa crocante que não dá pra dividir',
    tag: 'Chapa Quente',
    date: 'Receita do bar',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    alt: 'Porção crocante de tulipa e petiscos servidos na mesa',
  },
  {
    id: 5,
    rotationClass: styles.rotateTiltedLeft,
    note: 'O brinde do 2º casamento oficial do Coyote!',
    tag: 'Histórias Reais',
    date: 'Amor & Boteco',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    alt: 'Comemoração calorosa entre amigos e casal',
  },
  {
    id: 6,
    rotationClass: styles.rotateTiltedRight,
    note: 'Feijoada farta de sábado da Ana',
    tag: 'Almoço da Família',
    date: 'Tradição do meio-dia',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    alt: 'Buffet tradicional de feijoada completa no almoço',
  },
];

export default function MemoriesWall() {
  return (
    <section className={styles.wallSection} aria-labelledby="memories-heading">
      <div className={styles.container}>
        {/* Header Row with Mascot */}
        <div className={styles.headerRow}>
          <div className={styles.headerArea}>

            <h2 id="memories-heading" className={styles.sectionTitle}>
              8 anos de risadas, encontros e{' '}
              <span className={styles.amberGlow}>histórias reais</span>
            </h2>

            {/* Handwritten Subtitle in Caveat */}
            <p className={styles.handwrittenSubtitle}>
              mais que um bar, a extensão da sala de casa
            </p>

            <p className={styles.sectionSubtitle}>
              O Coyote não é apenas um endereço no CIC; é onde os amigos se reúnem em volta de mesas de madeira rústica, os copos americanos suam com chopp trincando e os abraços são de verdade.
            </p>

            {/* Irreverent Wedding Callout with Handwritten Badge */}
            <div className={styles.weddingHighlight}>
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 22, color: 'var(--accent-amber)' }} />
              <span className={styles.weddingBadge}>
                Sim, já comemoramos 2 casamentos aqui!
              </span>
            </div>
          </div>

          <div className={styles.mascotWrapper}>
            <CoyoteWatcher size={115} />
          </div>
        </div>

        {/* Organic Polaroid Grid */}
        <div className={styles.polaroidGrid}>
          {POLAROIDS.map((item) => (
            <article
              key={item.id}
              className={`${styles.polaroidCard} ${item.rotationClass}`}
            >
              <div className={styles.photoWrapper}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={styles.photoImg}
                  loading="lazy"
                />
              </div>

              <div className={styles.polaroidFooter}>
                <p className={styles.polaroidNote}>"{item.note}"</p>
                <div className={styles.polaroidMeta}>
                  <span className={styles.polaroidTag}>{item.tag}</span>
                  <span className={styles.polaroidDate}>{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tradition Carimbo Stamp Banner */}
        <div className={styles.heritageBanner}>
          <div className={styles.heritageLeft}>
            <div>
              <h3 className={styles.heritageTitle}>
                8 Anos de Tradição no CIC • Fundado em 2017
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
