export const MENU_CATEGORIES = [
  { id: 'todos', name: 'Todos' },
  { id: 'destaques', name: 'Mais Pedidos' },
  { id: 'almoco', name: 'Almoço & Buffet' },
  { id: 'lanches', name: 'Semana do X' },
  { id: 'porcoes', name: 'Porções na Chapa' },
  { id: 'caldos', name: 'Caldos Quentes' },
  { id: 'bebidas', name: 'Chopes & Bebidas' },
  { id: 'doses', name: 'Destilados & Doses' },
];

export const MENU_ITEMS = [
  // Almoço
  {
    id: 'alm-1',
    name: 'Buffet Livre com Bife na Chapa',
    category: 'almoco',
    shift: 'day',
    price: 29.9,
    description:
      'Arroz, feijão preto e branco, macarrão alho e óleo, bife bovino, frango empanado, legumes, farofa e saladas variadas.',
    badge: 'Almoço Seg a Sex',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: true,
  },
  {
    id: 'alm-2',
    name: 'Feijoada Completa da Dona Ana (Sábados)',
    category: 'almoco',
    shift: 'day',
    price: 39.9,
    description:
      'Tradicional feijoada servida na panela de ferro com todas as carnes nobres, dobradinha, couve refogada, torresmo à pururuca e bisteca.',
    badge: 'Exclusivo Sábado',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: true,
  },

  // Semana do X
  {
    id: 'lan-1',
    name: 'X-Salada Especial',
    category: 'lanches',
    shift: 'night',
    price: 28.0,
    description:
      'Hambúrguer artesanal 160g, queijo prato duplo, presunto, tomate fresco, alface crocante e maionese verde caseira no pão brioche.',
    badge: 'Semana do X',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: true,
  },
  {
    id: 'lan-2',
    name: 'Combo Família: 3 X-Saladas',
    category: 'lanches',
    shift: 'night',
    price: 50.0,
    description:
      'Três X-Saladas artesanais preparados na chapa. O combo favorito das mesas com a galera reunida.',
    badge: 'Melhor Custo-Benefício',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: true,
  },
  {
    id: 'lan-3',
    name: 'X-Costela Desfiada',
    category: 'lanches',
    shift: 'night',
    price: 28.0,
    description:
      'Costela bovina desfiada e suculenta, queijo derretido, cebola caramelizada e barbecue artesanal.',
    badge: 'Semana do X',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: false,
  },

  // Porções na Chapa
  {
    id: 'por-1',
    name: 'Tulipas de Frango Fritas Crocantes',
    category: 'porcoes',
    shift: 'night',
    price: 50.0,
    description:
      'Porção generosa de tulipas empanadas crocantes por fora e macias por dentro. Acompanha molho de alho da casa.',
    badge: 'Campeã de Pedidos',
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: true,
  },
  {
    id: 'por-2',
    name: 'Batata Rústica com Cheddar & Bacon',
    category: 'porcoes',
    shift: 'night',
    price: 35.0,
    description:
      'Batatas crocantes temperadas com páprica, cobertas com farto creme de cheddar e cubos crocantes de bacon.',
    badge: 'Para Dividir',
    image:
      'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: false,
  },
  {
    id: 'por-3',
    name: 'Calabresa Acebolada na Chapa',
    category: 'porcoes',
    shift: 'night',
    price: 30.0,
    description:
      'Linguiça calabresa fatiada, dourada com bastante cebola e acompanhada de farofa e pão francês fatiado.',
    badge: 'Boteco Raiz',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: false,
  },

  // Caldos Quentes
  {
    id: 'cal-1',
    name: 'Caldo de Feijão com Bacon & Couve',
    category: 'caldos',
    shift: 'night',
    price: 22.0,
    description:
      'Cumbuca bem quente de caldo de feijão caseiro encorpado, finalizado com torresmo crocante, couve e cheiro-verde.',
    badge: 'Pra Esquentar o Frio',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: false,
  },

  // Bebidas & Chopp
  {
    id: 'beb-1',
    name: 'Chopp Pilsen Trincando 500ml',
    category: 'bebidas',
    shift: 'all',
    price: 12.0,
    description:
      'Caneca congelada de Chopp Pilsen artesanal com colarinho cremoso. Double até as 20h de terça a quinta.',
    badge: 'Mais Pedido',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: true,
  },
  {
    id: 'beb-2',
    name: 'Balde de Cerveja Long Neck (5 un)',
    category: 'bebidas',
    shift: 'night',
    price: 45.0,
    description:
      'Balde no gelo com 5 garrafas de long neck selecionadas para manter a rodada gelada na mesa.',
    badge: 'Galera',
    image:
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: false,
  },
  {
    id: 'beb-3',
    name: 'Caipirinha Tradicional de Limão',
    category: 'doses',
    shift: 'night',
    price: 18.0,
    description:
      'Feita no copo com cachaça artesanal, limões taiti espremidos na hora e açúcar no ponto certo.',
    badge: 'Clássico',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80',
    available: true,
    isPopular: false,
  },
];
