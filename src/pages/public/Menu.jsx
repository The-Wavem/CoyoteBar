import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  SearchOutlined,
  StarRateRounded,
  InfoOutlined,
  PlaceOutlined,
  RestaurantMenuOutlined,
  ReceiptLongOutlined,
  NotificationsNoneOutlined,
  ArrowBackIosNewOutlined,
  CloseOutlined,
} from '@mui/icons-material';
import CoyoteLogo from '../../components/common/CoyoteLogo';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData';
import styles from './Menu.module.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  // Categorias excluindo 'todos' e 'destaques' para a listagem agrupada
  const displayCategories = useMemo(() => {
    return MENU_CATEGORIES.filter((c) => c.id !== 'todos' && c.id !== 'destaques');
  }, []);

  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return MENU_ITEMS.filter((item) => {
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      if (activeCategory === 'todos') return matchesSearch;
      if (activeCategory === 'destaques') return item.isPopular && matchesSearch;
      return item.category === activeCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Agrupamento por categoria caso não haja busca ativa e categoria for 'todos'
  const groupedItems = useMemo(() => {
    if (activeCategory !== 'todos' || searchQuery) return null;
    return displayCategories
      .map((cat) => ({
        ...cat,
        items: MENU_ITEMS.filter((item) => item.category === cat.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [activeCategory, searchQuery, displayCategories]);

  return (
    <div className={styles.appViewport}>
      {/* Botão sutil para voltar ao site institucional */}
      <div className={styles.topBackBar}>
        <Link className={styles.backLink} to="/" aria-label="Voltar ao site do Coyote">
          <ArrowBackIosNewOutlined fontSize="inherit" />
          <span>Voltar ao site do Coyote</span>
        </Link>
      </div>

      <div className={styles.appContainer}>
        {/* Cabeçalho do Estabelecimento Estilo pedir.delivery */}
        <header className={styles.restaurantCard}>
          <div className={styles.restaurantHeaderRow}>
            <div className={styles.logoAndName}>
              <div className={styles.logoWrapper}>
                <CoyoteLogo size={48} />
              </div>
              <div>
                <h1 className={styles.restaurantName}>Coyote Bar & Petiscaria</h1>
                <p className={styles.restaurantAddress}>
                  <PlaceOutlined fontSize="inherit" /> R. Gastão de Abreu Pires, 210 • CIC
                </p>
              </div>
            </div>
            <button
              type="button"
              className={styles.infoBtn}
              onClick={() => setInfoModalOpen(true)}
              aria-label="Ver informações do bar"
            >
              <InfoOutlined fontSize="small" />
              <span>Informações</span>
            </button>
          </div>

          <div className={styles.restaurantMetaRow}>
            <div className={styles.statusHours}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Aberto agora</span>
              <span className={styles.metaDivider}>•</span>
              <span className={styles.hoursText}>18:00 - 02:00</span>
            </div>
            <div className={styles.ratingBadge}>
              <StarRateRounded className={styles.starIcon} fontSize="small" />
              <span>4.9</span>
            </div>
          </div>
        </header>

        {/* Barra de Categorias Horizontal (Pills) */}
        <nav className={styles.categoryPillsNav} aria-label="Categorias do cardápio">
          <div className={styles.categoryPillsScroll}>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.pillBtn} ${activeCategory === cat.id ? styles.pillBtnActive : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                }}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </nav>

        {/* Barra de Pesquisa */}
        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <SearchOutlined className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Pesquisar no cardápio"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={styles.clearBtn}
                aria-label="Limpar pesquisa"
              >
                <CloseOutlined fontSize="small" />
              </button>
            )}
          </div>
        </div>

        {/* Listagem do Cardápio */}
        <main className={styles.menuContent}>
          {groupedItems ? (
            groupedItems.map((group) => (
              <section key={group.id} className={styles.categorySection}>
                <h2 className={styles.categoryHeading}>{group.name.toUpperCase()}</h2>
                <div className={styles.itemsList}>
                  {group.items.map((item) => (
                    <div key={item.id} className={styles.productCard}>
                      <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{item.name}</h3>
                        <p className={styles.productDesc}>{item.description}</p>
                        <span className={styles.productPrice}>
                          A partir de{' '}
                          {item.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                      </div>
                      <div className={styles.productImageWrapper}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.productImage}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className={styles.categorySection}>
              <h2 className={styles.categoryHeading}>
                {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name.toUpperCase() ||
                  'PRODUTOS'}
              </h2>
              {filteredItems.length === 0 ? (
                <div className={styles.emptyContainer}>
                  <p>Nenhum item encontrado nesta busca.</p>
                </div>
              ) : (
                <div className={styles.itemsList}>
                  {filteredItems.map((item) => (
                    <div key={item.id} className={styles.productCard}>
                      <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{item.name}</h3>
                        <p className={styles.productDesc}>{item.description}</p>
                        <span className={styles.productPrice}>
                          A partir de{' '}
                          {item.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                      </div>
                      <div className={styles.productImageWrapper}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.productImage}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Modal / Dialog de Informações do Bar */}
      {infoModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setInfoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="info-modal-title"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 id="info-modal-title">Sobre o Coyote Bar</h3>
              <button
                type="button"
                onClick={() => setInfoModalOpen(false)}
                aria-label="Fechar modal de informações"
              >
                <CloseOutlined />
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>
                <strong>Endereço:</strong> R. Gastão de Abreu Pires, 210 - CIC, Curitiba/PR
              </p>
              <p>
                <strong>Horários:</strong> Terça a Quinta 18h às 00h • Sexta e Sábado 18h às 02h •
                Sábado Almoço 11h30 às 15h00
              </p>
              <p>
                <strong>Formas de Pagamento:</strong> Pix, Débito, Crédito e Dinheiro
              </p>
              <p>
                <strong>Wi-Fi da Casa:</strong> Coyote_Bar_Clientes (senha no balcão)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar Fixa no Rodapé (Estilo App) */}
      <footer className={styles.bottomAppNav} aria-label="Navegação do aplicativo">
        <div className={styles.bottomNavContainer}>
          <button
            type="button"
            className={`${styles.bottomNavItem} ${styles.bottomNavActive}`}
            onClick={() => {
              setActiveCategory('todos');
              setSearchQuery('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <RestaurantMenuOutlined fontSize="small" />
            <span>Cardápio</span>
          </button>
          <a
            href="https://wa.me/5541997683925?text=Ol%C3%A1!%20Estou%20na%20mesa%20e%20gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomNavItem}
            aria-label="Fazer pedido via WhatsApp"
          >
            <ReceiptLongOutlined fontSize="small" />
            <span>Fazer Pedido</span>
          </a>
          <a
            href="https://wa.me/5541997683925?text=Ol%C3%A1!%20Poderia%20chamar%20o%20atendimento%20na%20minha%20mesa%3F"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomNavItem}
            aria-label="Chamar garçom via WhatsApp"
          >
            <NotificationsNoneOutlined fontSize="small" />
            <span>Chamar Garçom</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
