import React from 'react';
import { Link } from 'react-router-dom';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CoyoteLogo from '../common/CoyoteLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Identity */}
          <div className={styles.column}>
            <Link to="/" className={styles.brandHeader}>
              <CoyoteLogo size={32} />
              <span className={styles.brandName}>
                COYOTE <span className={styles.brandAccent}>BAR</span>
              </span>
            </Link>
            <p className={styles.slogan}>
              Since 2017 — Servindo mais que bebidas, servindo memórias. O pub oficial da CIC para quem valoriza boa música e amigos reunidos.
            </p>
            <div className={styles.vibePills}>
              <span className={styles.pill}>
                <MusicNoteOutlinedIcon sx={{ fontSize: 14 }} />
                Música ao Vivo
              </span>
              <span className={styles.pill}>
                <SportsEsportsOutlinedIcon sx={{ fontSize: 14 }} />
                Sinuca
              </span>
              <span className={styles.pill}>
                <FamilyRestroomOutlinedIcon sx={{ fontSize: 14 }} />
                Ambiente Familiar
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/" className={styles.footerLink}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/cardapio" className={styles.footerLink}>
                  Cardápio Digital
                </Link>
              </li>
              <li>
                <Link to="/local" className={styles.footerLink}>
                  Local & Ambiente
                </Link>
              </li>
              <li>
                <Link to="/contato" className={styles.footerLink}>
                  Contato & Reservas
                </Link>
              </li>
              <li>
                <Link to="/admin" className={`${styles.footerLink} ${styles.adminLink}`}>
                  <LockOutlinedIcon sx={{ fontSize: 14 }} />
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Hours */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Onde Estamos</h4>
            <div className={styles.infoItem}>
              <PlaceOutlinedIcon fontSize="small" className={styles.infoIcon} />
              <span>R. Gastão de Abreu Pires, 210 - CIC, Curitiba - PR</span>
            </div>

            <div className={styles.infoItem}>
              <AccessTimeOutlinedIcon fontSize="small" className={styles.infoIcon} />
              <div>
                <strong>Terça a Domingo:</strong>
                <div>18:00 às 02:00</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'var(--status-open)',
                  boxShadow: '0 0 8px var(--status-open)',
                }}
              />
              <span style={{ fontSize: '0.8rem', color: 'var(--status-open)', fontWeight: 600 }}>
                Aberto hoje a partir das 18h
              </span>
            </div>
          </div>

          {/* Column 4: Social & WhatsApp */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Conecte-se</h4>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
              Acompanhe as novidades e converse diretamente com a nossa equipe.
            </p>
            <div className={styles.socialRow}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.socialBtnInstagram}`}
                aria-label="Instagram do Coyote Bar"
              >
                <InstagramIcon fontSize="small" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook do Coyote Bar"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.socialBtnWhatsApp}`}
                aria-label="WhatsApp do Coyote Bar"
              >
                <WhatsAppIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className={styles.bottomBar}>
          <span>&copy; {new Date().getFullYear()} Coyote Bar. Todos os direitos reservados.</span>
          <span>
            Desenvolvido com carinho por{' '}
            <a
              href="https://thewavem.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.wavemLink}
            >
              Wavem
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
