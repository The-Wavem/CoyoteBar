import React from "react";
import {
  SportsEsportsOutlined,
  RestaurantOutlined,
  LocalFireDepartmentOutlined,
  PlaceOutlined,
  AccessTimeOutlined,
  NavigationOutlined,
  DirectionsCarOutlined,
} from "@mui/icons-material";
import styles from "./BarAtmosphere.module.css";

const EXPERIENCES = [
  {
    id: "sinuca",
    icon: SportsEsportsOutlined,
    title: "A MESA DE SINUCA",
    desc: "O estalo inconfundível das bolas, o giz azul no taco e as disputas acirradas que decidem quem paga a próxima rodada de chopp.",
    handwritten: "quem perde a ficha paga a saideira!",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chapa",
    icon: RestaurantOutlined,
    title: "A CHAPA & O FOGÃO",
    desc: "Do buffet farto com bife acebolado no almoço às tulipas crocantes, batatas rústicas e pastéis quentinhos servidos na mesa à noite.",
    handwritten: "o cheiro bom que puxa quem passa na rua!",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "clima",
    icon: LocalFireDepartmentOutlined,
    title: "O CLIMA DA CASA",
    desc: "Chuva, neblina ou vento sul: nosso salão coberto de madeira é o refúgio perfeito, com cumbuca de caldo fervendo e chopp trincando o ano todo.",
    handwritten: "quentinho por dentro, trincando no copo!",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BarAtmosphere() {
  return (
    <section className={styles.section} aria-labelledby="atmosphere-title">
      <div className={styles.container}>
        {/* Cabeçalho */}
        <div className={styles.header}>
          <h2 id="atmosphere-title" className={styles.mainTitle}>
            O NOSSO PONTO DE ENCONTRO
          </h2>
          <p className={styles.handwrittenSub}>
            Sem frescura: o chão do Coyote respira conversa alta, copo cheio e
            risada solta.
          </p>
        </div>

        {/* Grade de Janelas Fotográficas Imersivas */}
        <div className={styles.experiencesGrid}>
          {EXPERIENCES.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className={styles.experienceCard}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.cardOverlay} />

                <div className={styles.cardTop} />


                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <span className={styles.cardHandwritten}>
                    "{item.handwritten}"
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bloco de Coordenadas, Horários e Mapa Interativo Dark */}
        <div className={styles.coordinatesBanner}>
          <div className={styles.coordsMain}>
            <h3 className={styles.coordsTitle}>
              R. GASTÃO DE ABREU PIRES, 210
            </h3>
            <p className={styles.coordsDesc}>
              Ponto de fácil acesso, com calçada acolhedora e estacionamento
              descomplicado na via.
            </p>

            <div className={styles.routeButtons}>
              <a
                href="https://maps.google.com/?q=Coyote+Bar+Curitiba"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapsBtn}
                aria-label="Traçar rota no Google Maps para o Coyote Bar"
              >
                <NavigationOutlined fontSize="small" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href="https://waze.com/ul?q=Rua+Gastao+de+Abreu+Pires+210+Curitiba&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.wazeBtn}
                aria-label="Abrir rota no Waze para o Coyote Bar"
              >
                <DirectionsCarOutlined fontSize="small" />
                <span>Navegar no Waze</span>
              </a>
            </div>

            {/* Horários do Balcão */}
            <div className={styles.hoursBox}>
              <div className={styles.hoursTag}>
                <AccessTimeOutlined fontSize="small" />
                <span>HORÁRIOS DO BALCÃO</span>
              </div>
              <ul className={styles.hoursList}>
                <li>
                  <span>Terça a Quinta:</span> <strong>18:00 às 00:00</strong>
                </li>
                <li>
                  <span>Sexta & Sábado (Noite):</span>{" "}
                  <strong>18:00 às 02:00</strong>
                </li>
                <li>
                  <span>Sábado (Almoço Feijoada):</span>{" "}
                  <strong>11:30 às 15:00</strong>
                </li>
                <li>
                  <span>Domingo & Segunda:</span> <em>Recarga da tropa</em>
                </li>
              </ul>
            </div>
          </div>

          {/* Janela Visual do Mapa com Estilo Dark */}
          <div className={styles.mapWrapper}>
            <iframe
              title="Mapa de localização do Coyote Bar na CIC"
              src="https://maps.google.com/maps?q=Rua+Gast%C3%A3o+de+Abreu+Pires%2C+210+-+Cidade+Industrial+de+Curitiba%2C+PR&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapOverlay} />
          </div>
        </div>
      </div>
    </section>
  );
}
