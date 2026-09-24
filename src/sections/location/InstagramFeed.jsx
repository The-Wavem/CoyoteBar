import React from 'react';
import {
  CameraAltOutlined,
  FavoriteBorder,
  ChatBubbleOutline,
  Instagram,
  LaunchOutlined,
} from '@mui/icons-material';
import styles from './InstagramFeed.module.css';

const INSTAGRAM_POSTS = [
  {
    id: 'post-1',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    alt: 'Comemoração de aniversário com mesa cheia e brindes no Coyote Bar',
    tag: '#Comemoração #Aniversário',
    caption:
      'Aniversário em família ou com a galera da firma: mesa farta e brinde sincero no melhor boteco do CIC.',
    likes: 342,
    comments: 28,
  },
  {
    id: 'post-2',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    alt: 'Panela de feijoada borbulhando no almoço de sábado da Dona Ana',
    tag: '#Feijoada #SábadoNoCoyote',
    caption:
      'Sábado sem a feijoada da Dona Ana nem é fim de semana de verdade! Panela de ferro borbulhando desde cedo.',
    likes: 489,
    comments: 45,
  },
  {
    id: 'post-3',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    alt: 'Violão no palco com iluminação âmbar na noite acústica',
    tag: '#MúsicaAoVivo #SextaAcústica',
    caption:
      'Sexta acústica no clima perfeito. Luz baixa, modão, rock nacional e a primeira rodada na mesa.',
    likes: 276,
    comments: 19,
  },
  {
    id: 'post-4',
    image:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    alt: 'Mesa de sinuca com bolas e canecas de chopp gelado',
    tag: '#Sinuca #ChoppGelado',
    caption:
      'Giz azul na ponta do taco, chopp trincando na mesa e quem perder a partida paga a saideira.',
    likes: 394,
    comments: 32,
  },
  {
    id: 'post-5',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    alt: 'Cumbuca de caldo quente saindo fumaça na noite fria',
    tag: '#TemporadaDeCaldos #FrioCWB',
    caption:
      'Frio de 5 graus em Curitiba? A cumbuca de caldo verde e feijão com bacon resolve na hora.',
    likes: 512,
    comments: 61,
  },
  {
    id: 'post-6',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    alt: 'Amigos reunidos na fachada do Coyote Bar',
    tag: '#AlcateiaCoyote #Desde2017',
    caption:
      'Nossa alcateia reunida na marquise. Desde 2017 sendo a segunda casa de quem vive e trabalha no CIC!',
    likes: 620,
    comments: 54,
  },
];

export default function InstagramFeed() {
  return (
    <section className={styles.section} aria-labelledby="instagram-feed-title">
      <div className={styles.bottomGlow} />

      <div className={styles.container}>
        {/* Cabeçalho */}
        <div className={styles.headerBlock}>
          <div className={styles.tag}>
            <CameraAltOutlined sx={{ fontSize: 16 }} />
            <span>Ao Vivo nas Redes</span>
          </div>

          <h2 id="instagram-feed-title" className={styles.title}>
            A ALCATEIA NO INSTAGRAM
          </h2>

          <a
            href="https://instagram.com/coyotebarcwb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
            aria-label="Abrir perfil @coyotebarcwb no Instagram"
          >
            <span>@coyotebarcwb</span>
            <LaunchOutlined sx={{ fontSize: 16 }} />
          </a>

          <p className={styles.subtitle}>
            O que acontece no Coyote vai pro feed. Marque a gente com a tag #CoyoteBarCWB!
          </p>
        </div>

        {/* Grade de 6 Fotos do Feed */}
        <div className={styles.grid}>
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/coyotebarcwb"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.postItem}
              aria-label={`Ver publicação: ${post.caption}`}
            >
              <img
                src={post.image}
                alt={post.alt}
                className={styles.postImage}
                loading="lazy"
              />

              <div className={styles.overlay}>
                <div className={styles.countersRow}>
                  <span className={styles.counterItem}>
                    <FavoriteBorder className={styles.counterIcon} sx={{ fontSize: 18 }} />
                    <span>{post.likes}</span>
                  </span>
                  <span className={styles.counterItem}>
                    <ChatBubbleOutline className={styles.counterIcon} sx={{ fontSize: 18 }} />
                    <span>{post.comments}</span>
                  </span>
                </div>

                <p className={styles.postCaption}>{post.caption}</p>
                <span className={styles.postTag}>{post.tag}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Botão de Fechamento da Seção */}
        <div className={styles.footerCtaBlock}>
          <a
            href="https://instagram.com/coyotebarcwb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaCtaBtn}
            aria-label="Seguir o Coyote Bar no Instagram"
          >
            <Instagram sx={{ fontSize: 22 }} />
            <span>ACOMPANHE NOSSO DIA A DIA NO @COYOTEBARCWB</span>
          </a>
        </div>
      </div>
    </section>
  );
}
