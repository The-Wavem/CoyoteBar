import React from 'react';
import { HistoryEduOutlined, CelebrationOutlined } from '@mui/icons-material';
import styles from './BarStory.module.css';

export default function BarStory() {
  return (
    <section className={styles.section} aria-labelledby="bar-story-title">
      <div className={styles.topGlow} />

      <div className={styles.container}>
        {/* Cabeçalho & Manifesto */}
        <div className={styles.headerBlock}>

          <h1 id="bar-story-title" className={styles.title}>
            O BOTECO QUE VIROU <span className={styles.titleAccent}>FAMÍLIA NO CIC</span>
          </h1>

          <p className={styles.subtitle}>
            8 anos servindo mais que bebidas... servindo memórias de verdade.
          </p>
        </div>

        {/* Grid Narrativo Fluido */}
        <div className={styles.contentGrid}>
          {/* Coluna Narrativa */}
          <div className={styles.narrativeCol}>
            <p className={styles.leadParagraph}>
              Tudo começou em 2017, numa esquina acolhedora da <strong>Gastão de Abreu Pires</strong>. O
              sonho da <strong>Dona Ana</strong> nunca foi montar um espaço gourmet engravatado ou uma balada
              com regras rígidas, mas sim um <strong>boteco com alma</strong> — onde qualquer trabalhador da
              CIC pudesse chegar cansado do expediente, puxar uma cadeira e se sentir entre amigos de longa data.
            </p>

            <p className={styles.bodyParagraph}>
              Não foi fácil chegar até aqui. Enfrentamos as noites cortantes de 3 graus do inverno curitibano
              esquentando as mãos em cumbucas de caldos fervendo e mantendo a chapa estalando até a madrugada.
              Aqui, a equipe não para: todo mundo trabalha em sintonia fina pelos radinhos comunicadores para
              garantir que nenhuma mesa fique esperando e nenhum chopp perca o colarinho trincando.
            </p>

            {/* Destaque Afetivo: Os Casamentos Celebrados no Bar */}
            <div className={styles.weddingNoteBox}>
              <div className={styles.tapeTop} />
              <div className={styles.stampBadge}>
                <CelebrationOutlined sx={{ fontSize: 16 }} />
                <span>MARCO HISTÓRICO DA CASA</span>
              </div>
              <p className={styles.weddingText}>
                Com tanta história de amizade e cumplicidade, o salão do Coyote já foi palco de{' '}
                <strong>2 casamentos reais comemorados aqui dentro</strong>! Em vez de festa convencional,
                teve muito brinde, feijoada farta, pagode no gogó e a energia de quem celebra o amor no lugar
                onde a vida acontece.
              </p>
              <span className={styles.weddingQuote}>
                "Se essas mesas de madeira falassem, contariam as melhores histórias de Curitiba."
              </span>
            </div>
          </div>

          {/* Coluna Visual: Foto com Estilo Polaroid/Retrato Rústico */}
          <div className={styles.visualCol}>
            <div className={styles.photoFrame}>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                alt="Dona Ana e o balcão acolhedor do Coyote Bar"
                className={styles.photoImage}
                loading="lazy"
              />
              <div className={styles.photoCaption}>
                <span className={styles.photoHandwritten}>
                  "Dona Ana & o balcão que acolhe o CIC desde 2017"
                </span>
                <span className={styles.photoLocation}>
                  R. Gastão de Abreu Pires, 210 • Curitiba - PR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
