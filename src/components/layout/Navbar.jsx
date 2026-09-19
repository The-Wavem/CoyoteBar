import React, { useState, useEffect } from 'react';
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
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          <CoyoteLogo size={36} />
          <span className={styles.brandName}>
            COYOTE <span className={styles.brandHighlight}>BAR</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
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

      {/* Mobile Backdrop & Drawer */}
      {isMenuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}
      <aside className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`} aria-label="Menu Lateral">
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <CoyoteLogo size={32} />
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
              isActive ? `${styles.drawerLink} ${styles.drawerActive}` : styles.drawerLink
            }
          >
            <HomeOutlinedIcon />
            Início
          </NavLink>
          <NavLink
            to="/local"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.drawerLink} ${styles.drawerActive}` : styles.drawerLink
            }
          >
            <PlaceOutlinedIcon />
            Local
          </NavLink>
          <NavLink
            to="/contato"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.drawerLink} ${styles.drawerActive}` : styles.drawerLink
            }
          >
            <PhoneOutlinedIcon />
            Contato
          </NavLink>
          <NavLink
            to="/cardapio"
            onClick={closeMenu}
            className={styles.drawerCtaButton}
          >
            <RestaurantMenuOutlinedIcon />
            Cardápio Completo
          </NavLink>
        </nav>

        <div className={styles.drawerFooter}>
          <p className={styles.drawerAddress}>R. Gastão de Abreu Pires, 210 • CIC</p>
          <span className={styles.drawerStatus}>
            <span className={styles.statusDot} />
            Aberto hoje a partir das 18h
          </span>
        </div>
      </aside>
    </header>
  );
}
