import React from "react";
import { Link } from "react-router-dom";
import {
  PlaceOutlined,
  AccessTimeOutlined,
  WhatsApp,
  Instagram,
  Facebook,
  LockOutlined,
  RestaurantMenuOutlined,
} from "@mui/icons-material";
import CoyoteLogo from "../common/CoyoteLogo";
import mapsIcon from '../../assets/icons/maps.png';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Brilho quente de filamento/marquise */}
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Top Section - Identidade & Manifesto */}
        <div className={styles.topSection}>
          <Link
            to="/"
            className={styles.brandRow}
            aria-label="Coyote Bar - Início"
          >
            <CoyoteLogo size={44} />
            <div className={styles.brandTextBox}>
              <span className={styles.brandTitle}>
                COYOTE <span className={styles.brandAccent}>BAR</span>
              </span>
              <span className={styles.brandTag}>DESDE 2017 • CIC</span>
            </div>
          </Link>

          <h3 className={styles.manifestoTitle}>
            SERVINDO MAIS QUE BEBIDAS. SERVINDO MEMÓRIAS.
          </h3>

          <span className={styles.weddingChalk}>
            "Aqui é Coyotada!!"
          </span>
        </div>

        {/* Main Grid - O Balcão em 3 Colunas */}
        <div className={styles.mainGrid}>
          {/* Coluna 1: O Ponto */}
          <div className={styles.column}>
            <h4 className={styles.columnHeader}>
              <PlaceOutlined className={styles.columnHeaderIcon} />
              <span>O PONTO</span>
            </h4>
            <div className={styles.addressBox}>
              <p className={styles.addressStreet}>
                R. Gastão de Abreu Pires, 210
              </p>
              <p className={styles.addressDetail}>
                Cidade Industrial de Curitiba (CIC)
                <br />
                Curitiba - PR • CEP 81312-050
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=R.+Gastão+de+Abreu+Pires,+210+-+CIC,+Curitiba+-+PR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
              aria-label="Abrir localização do Coyote Bar no Google Maps"
            >
              <img src={mapsIcon} alt="" className={styles.mapIcon} aria-hidden="true" />
              <span>COMO CHEGAR NO BAR</span>
            </a>
          </div>

          {/* Coluna 2: Horários do Balcão */}
          <div className={styles.column}>
            <h4 className={styles.columnHeader}>
              <AccessTimeOutlined className={styles.columnHeaderIcon} />
              <span>QUANDO O BALCÃO ABRE</span>
            </h4>
            <ul className={styles.hoursList}>
              <li className={styles.hourRow}>
                <span className={styles.hourDay}>Terça a Quinta</span>
                <span className={styles.hourTime}>18:00 às 00:00</span>
              </li>
              <li className={styles.hourRow}>
                <span className={styles.hourDay}>Sexta & Sábado</span>
                <span className={styles.hourTime}>18:00 às 02:00</span>
              </li>
              <li className={styles.hourRow}>
                <span className={styles.hourDay}>
                  Sábado (Almoço)
                  <span className={styles.hourNote}>Feijoada Completa</span>
                </span>
                <span className={styles.hourTime}>11:30 às 15:00</span>
              </li>
              <li className={styles.hourRow}>
                <span className={styles.hourDay}>Domingo & Segunda</span>
                <span className={styles.hourTime}>Folga da casa</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Falar com a Casa & Zap */}
          <div className={styles.column}>
            <h4 className={styles.columnHeader}>
              <WhatsApp className={styles.columnHeaderIcon} />
              <span>RESERVAR & TROCAR UMA IDEIA</span>
            </h4>
            <p className={styles.contactDesc}>
              Comemorar aniversário, juntar a galera pro show ou pedir marmitex?
              Chama a Dona Ana direto no balcão digital.
            </p>
            <a
              href="https://wa.me/5541997683925?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Coyote%20Bar."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsAppBtn}
              aria-label="Conversar com a Dona Ana no WhatsApp"
            >
              <WhatsApp sx={{ fontSize: 20 }} />
              <span>FALAR NO WHATSAPP</span>
            </a>

            <div className={styles.socialIconsRow}>
              <a
                href="https://instagram.com/coyotebarcwb"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram do Coyote Bar"
              >
                <Instagram fontSize="small" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook do Coyote Bar"
              >
                <Facebook fontSize="small" />
              </a>
            </div>

            <div className={styles.extraLinks}>
              <Link to="/cardapio" className={styles.extraLink}>
                <RestaurantMenuOutlined sx={{ fontSize: 14 }} />
                <span>Cardápio Digital</span>
              </Link>
              <Link to="/admin" className={styles.extraLink}>
                <LockOutlined sx={{ fontSize: 14 }} />
                <span>Área Admin</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Assinatura Wavem */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Coyote Bar. O autêntico boteco da
            CIC.
          </p>
          <div className={styles.wavemSignature}>
            <span>Desenvolvido com alma curitibana por</span>
            <a
              href="https://thewavem.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.wavemLink}
            >
              Wavem
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
