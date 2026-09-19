import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CoyoteLogo from '../common/CoyoteLogo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand / Logo */}
        <Link to="/" className={styles.brandLink} onClick={closeMobileMenu}>
          <CoyoteLogo size={36} />
          <span className={styles.brandName}>
            COYOTE <span className={styles.brandAccent}>BAR</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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
            <CallOutlinedIcon fontSize="small" />
            Contato
          </NavLink>

          <NavLink
            to="/cardapio"
            className={({ isActive }) =>
              isActive ? `${styles.menuCta} ${styles.active}` : styles.menuCta
            }
          >
            <RestaurantMenuOutlinedIcon fontSize="small" />
            Cardápio
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <IconButton
          className={styles.mobileToggle}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          size="medium"
        >
          {mobileMenuOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </IconButton>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav className={styles.mobileDropdown} aria-label="Menu Mobile">
          <NavLink
            to="/"
            end
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
          >
            <HomeOutlinedIcon fontSize="small" />
            Início
          </NavLink>

          <NavLink
            to="/local"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
          >
            <PlaceOutlinedIcon fontSize="small" />
            Local
          </NavLink>

          <NavLink
            to="/contato"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
          >
            <CallOutlinedIcon fontSize="small" />
            Contato
          </NavLink>

          <NavLink
            to="/cardapio"
            onClick={closeMobileMenu}
            className={styles.mobileCta}
          >
            <RestaurantMenuOutlinedIcon fontSize="small" />
            Ver Cardápio
          </NavLink>
        </nav>
      )}
    </header>
  );
}
