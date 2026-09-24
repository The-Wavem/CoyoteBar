import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import {
  HomeOutlined,
  PlaceOutlined,
  PhoneOutlined,
  RestaurantMenuOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@mui/icons-material';
import CoyoteLogo from '../common/CoyoteLogo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Linha luminosa quente de marquise */}
      <div className={styles.topLightBeam} />

      <div className={styles.container}>
        {/* Logo & Marca */}
        <Link className={styles.brand} onClick={closeMenu} to="/" aria-label="Coyote Bar - Início">
          <CoyoteLogo size={36} animated />
          <div className={styles.brandTextBox}>
            <span className={styles.brandTitle}>
              COYOTE <span className={styles.brandAccent}>BAR</span>
            </span>
            <span className={styles.brandTag}>DESDE 2017 • CIC</span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className={styles.desktopNav} aria-label="Navegação Principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            <HomeOutlined fontSize="small" />
            <span>INÍCIO</span>
          </NavLink>
          <NavLink
            to="/local"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            <PlaceOutlined fontSize="small" />
            <span>O BAR</span>
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            <PhoneOutlined fontSize="small" />
            <span>CONTATO</span>
          </NavLink>

          {/* CTA Estilo Comanda de Bar */}
          <NavLink className={styles.menuTabCta} to="/cardapio">
            <RestaurantMenuOutlined fontSize="small" />
            <span>CARDÁPIO DIGITAL</span>
          </NavLink>
        </nav>

        {/* Botão Mobile Hamburguer */}
        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Render Backdrop & Modal Drawer via Portal to escape header backdrop-filter constraints */}
      {isMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <>
            {/* Backdrop escuro com blur */}
            <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />

            {/* Drawer Lateral Mobile com Cara de Boteco */}
            <aside
              className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`}
              aria-label="Menu Lateral de Navegação"
            >
              <div className={styles.drawerTop}>
                <div className={styles.drawerBrand}>
                  <CoyoteLogo size={42} />
                  <div>
                    <span className={styles.drawerBrandName}>COYOTE BAR</span>
                    <span className={styles.drawerHandwritten}>"chega mais, puxa uma cadeira!"</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.drawerCloseBtn}
                  onClick={closeMenu}
                  aria-label="Fechar menu lateral"
                >
                  <CloseOutlined />
                </button>
              </div>

              <nav className={styles.drawerNav}>
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? `${styles.drawerItem} ${styles.drawerActive}` : styles.drawerItem
                  }
                >
                  <HomeOutlined />
                  <span>INÍCIO & ATRAÇÕES</span>
                </NavLink>
                <NavLink
                  to="/local"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? `${styles.drawerItem} ${styles.drawerActive}` : styles.drawerItem
                  }
                >
                  <PlaceOutlined />
                  <span>ONDE ESTAMOS & AMBIENTE</span>
                </NavLink>
                <NavLink
                  to="/contato"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? `${styles.drawerItem} ${styles.drawerActive}` : styles.drawerItem
                  }
                >
                  <PhoneOutlined />
                  <span>HORÁRIOS & RESERVAS</span>
                </NavLink>
                <NavLink
                  to="/cardapio"
                  onClick={closeMenu}
                  className={styles.drawerCtaCardapio}
                >
                  <RestaurantMenuOutlined />
                  <span>ABRIR CARDÁPIO DA MESA</span>
                </NavLink>
              </nav>

              <div className={styles.drawerBottom}>
                <p className={styles.drawerAddress}>R. Gastão de Abreu Pires, 210 • CIC</p>
                <span className={styles.drawerStatus}>
                  A chapa tá quente e o chopp tá trincando.
                </span>
              </div>
            </aside>
          </>,
          document.body
        )}
    </header>
  );
}
