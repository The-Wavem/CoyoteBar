import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CoyoteLogo from '../common/CoyoteLogo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand */}
        <Link to="/" className={styles.brand} onClick={closeMenu} aria-label="Coyote Bar - Início">
          <CoyoteLogo size={54} animated />
        </Link>

        {/* Desktop Navigation (Direct Links) */}
        <nav className={styles.desktopNav} aria-label="Navegação Principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <HomeOutlinedIcon fontSize="small" />
            Início
          </NavLink>
          <NavLink
            to="/local"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <PlaceOutlinedIcon fontSize="small" />
            Local
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <PhoneOutlinedIcon fontSize="small" />
            Contato
          </NavLink>
          <NavLink
            to="/cardapio"
            className={styles.menuCtaButton}
          >
            <RestaurantMenuOutlinedIcon fontSize="small" />
            Cardápio
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className={styles.mobileToggleButton}
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <MenuOutlinedIcon />
        </button>
      </div>

      {/* Render Backdrop & Modal Drawer via Portal directly to body */}
      {isMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className={styles.portalWrapper}>
            {/* Dark Blur Backdrop - covers the entire screen, dims and blurs background */}
            <div
              className={styles.backdrop}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Completely Solid, High-Contrast Elevated Drawer */}
            <aside
              className={styles.mobileDrawer}
              aria-label="Menu Lateral de Navegação"
            >
              <div className={styles.drawerHeader}>
                <div className={styles.drawerBrand}>
                  <CoyoteLogo size={38} />
                  <span>
                    COYOTE <span className={styles.brandHighlight}>BAR</span>
                  </span>
                </div>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                >
                  <CloseOutlinedIcon />
                </button>
              </div>

              <nav className={styles.drawerNav}>
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.drawerLink} ${styles.drawerActive}`
                      : styles.drawerLink
                  }
                >
                  <HomeOutlinedIcon />
                  <span>Início</span>
                </NavLink>

                <NavLink
                  to="/local"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.drawerLink} ${styles.drawerActive}`
                      : styles.drawerLink
                  }
                >
                  <PlaceOutlinedIcon />
                  <span>Local & Ambiente</span>
                </NavLink>

                <NavLink
                  to="/contato"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.drawerLink} ${styles.drawerActive}`
                      : styles.drawerLink
                  }
                >
                  <PhoneOutlinedIcon />
                  <span>Contato & Reservas</span>
                </NavLink>

                <NavLink
                  to="/cardapio"
                  onClick={closeMenu}
                  className={styles.drawerCtaButton}
                >
                  <RestaurantMenuOutlinedIcon />
                  <span>Cardápio Completo</span>
                </NavLink>
              </nav>

              <div className={styles.drawerFooter}>
                <p className={styles.drawerAddress}>
                  R. Gastão de Abreu Pires, 210 • CIC
                </p>
                <span className={styles.drawerStatus}>
                  <span className={styles.statusDot} />
                  Aberto hoje a partir das 18h
                </span>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}
