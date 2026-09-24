import React, { useState, useMemo } from 'react';
import {
  SearchOutlined,
  WbSunnyOutlined,
  NightlifeOutlined,
  WhatsApp,
  LocalFireDepartmentOutlined,
  CloseOutlined,
} from '@mui/icons-material';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData';
import styles from './Menu.module.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Detecção inteligente de turno atual baseada no horário
  const currentHour = new Date().getHours();
  const defaultShift = currentHour >= 11 && currentHour < 16 ? 'day' : 'night';
  const [selectedShift, setSelectedShift] = useState(defaultShift);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Filtro de Turno (se 'day', filtra itens de dia ou all; se 'night', itens de noite ou all)
      const matchesShift = item.shift === 'all' || item.shift === selectedShift;

      // Filtro de Categoria
      let matchesCat = true;
      if (activeCategory === 'destaques') {
        matchesCat = item.isPopular;
      } else if (activeCategory !== 'todos') {
        matchesCat = item.category === activeCategory;
      }

      // Filtro de Busca
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesShift && matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery, selectedShift]);

  return (
    <div className={styles.menuPage}>
      {/* Topo de Contexto da Mesa */}
      <header className={styles.menuHeader}>
        <div className={styles.container}>
          <div className={styles.headerInfo}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} />
              <span>CARDÁPIO DA MESA • COYOTE BAR</span>
            </div>
            <h1 className={styles.menuTitle}>O QUE VAI NA MESA HOJE?</h1>
          </div>

          {/* Seletor de Turno (Almoço vs Noite) */}
          <div className={styles.shiftSelector}>
            <button
              type="button"
              className={`${styles.shiftBtn} ${selectedShift === 'day' ? styles.shiftBtnActive : ''}`}
              onClick={() => setSelectedShift('day')}
              aria-pressed={selectedShift === 'day'}
            >
              <WbSunnyOutlined fontSize="small" />
              <span>BUFFET & ALMOÇO</span>
            </button>
            <button
              type="button"
              className={`${styles.shiftBtn} ${selectedShift === 'night' ? styles.shiftBtnActive : ''}`}
              onClick={() => setSelectedShift('night')}
              aria-pressed={selectedShift === 'night'}
            >
              <NightlifeOutlined fontSize="small" />
              <span>PORÇÕES, LANCHES & BAR</span>
            </button>
          </div>

          {/* Barra de Busca Rápida */}
          <div className={styles.searchBarWrapper}>
            <SearchOutlined className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar por nome, ingrediente ou bebida..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Buscar no cardápio"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={styles.clearSearchBtn}
                aria-label="Limpar termo de busca"
              >
                <CloseOutlined fontSize="small" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Régua de Categorias Horizontal (Sticky) */}
      <nav className={styles.categoriesBar} aria-label="Categorias do cardápio">
        <div className={styles.categoriesScroll}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.categoryPill} ${activeCategory === cat.id ? styles.categoryPillActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Lista de Itens do Cardápio */}
      <main className={styles.container}>
        <div className={styles.itemsCountLine}>
          <span>
            {filteredItems.length} {filteredItems.length === 1 ? 'item disponível' : 'itens disponíveis'} no turno
          </span>
          {selectedShift === 'day' && (
            <span className={styles.shiftNote}>Servido das 11:30 às 15:00</span>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>Nenhum item encontrado com esse termo.</p>
            <button
              type="button"
              className={styles.resetSearchBtn}
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
            >
              Limpar filtros e ver tudo
            </button>
          </div>
        ) : (
          <div className={styles.itemsGrid}>
            {filteredItems.map((item) => (
              <article key={item.id} className={styles.menuCard}>
                <div className={styles.itemDetails}>
                  {item.badge && (
                    <span className={styles.itemBadge}>
                      <LocalFireDepartmentOutlined fontSize="inherit" />
                      {item.badge}
                    </span>
                  )}
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <div className={styles.priceRow}>
                    <span className={styles.itemPrice}>
                      {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                  </div>
                </div>

                <div className={styles.itemPhotoWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.itemPhoto}
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Barra Fixa Flutuante de Ajuda na Mesa */}
      <div className={styles.floatingTableBar}>
        <div className={styles.floatingBarInner}>
          <div className={styles.floatingText}>
            <span className={styles.tableCallTitle}>Pronto para pedir?</span>
            <span className={styles.tableCallSub}>Avise o garçom no salão ou mande no Whats</span>
          </div>
          <a
            href="https://wa.me/5541997683925?text=Ol%C3%A1!%20Estou%20na%20mesa%20e%20gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatingWhatsBtn}
            aria-label="Mandar pedido no WhatsApp"
          >
            <WhatsApp fontSize="small" />
            <span>Mandar no Whats</span>
          </a>
        </div>
      </div>
    </div>
  );
}
