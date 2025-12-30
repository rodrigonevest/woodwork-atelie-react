import slide1 from "../assets/img/slide-1.webp";
import slide2 from "../assets/img/slide-2.webp";
import slide3 from "../assets/img/slide-3.webp";
import project1 from "../assets/img/teste.webp";

export const companyInfo = {
  name: "WoodWork Design",
  slogan: "Artesanato em madeira, cuidado em cada detalhe.",
  description:
    "Nascemos da paixão pela madeira e pela arte de criar. Cada peça que sai do nosso ateliê carrega uma história de dedicação.",
  year: new Date().getFullYear(),
  contact: {
    whatsapp: "5599999999999",
    email: "contato@woodwork.com.br",
  },
};

export const navigationLinks = [
  { label: "Início", path: "/" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

export const homeContent = {
  welcomeTitle: "Bem-vindo ao WoodWork Design",
  features: [
    {
      id: 1,
      title: "Produção artesanal",
      text: "Cada peça é feita com cuidado e atenção aos detalhes.",
    },
    {
      id: 2,
      title: "Madeiras nobres",
      text: "Seleção rigorosa para garantir beleza e durabilidade.",
    },
    {
      id: 3,
      title: "Acabamento premium",
      text: "Design pensado para uso real no churrasco.",
    },
  ],
  actions: {
    portfolioBtn: "Ver Portfólio",
    portfolioLink: "/portfolio",
    budgetBtn: "Solicitar Orçamento",
    budgetSubtext: "Atendimento direto via WhatsApp",
  },
};

export const portfolioPageContent = {
  title: "Nosso Trabalho",
  subtitle: "Peças únicas disponíveis para encomenda",
};

export const contactPageContent = {
  title: "Entre em Contato",
  form: {
    nameLabel: "Nome",
    emailLabel: "Email (Opcional)",
    messageLabel: "Mensagem",
    submitBtn: "Enviar via WhatsApp",
  },
};

export const leadModalContent = {
  title: "Orçamento Exclusivo",
  description:
    "Preencha seus dados para receber um atendimento prioritário via WhatsApp.",
  fields: {
    namePlaceholder: "Como gostaria de ser chamado?",
    phonePlaceholder: "(DDD) 99999-9999",
    btnText: "Iniciar Conversa Agora",
  },
  alerts: {
    validation: "Por favor, preencha seu nome e telefone corretamente.",
  },
};

export const notFoundContent = {
  code: "404",
  title: "Página não encontrada",
  text: "Parece que nos perdemos na floresta.",
  btnText: "Voltar ao Início",
};

export const carouselSlides = [
  {
    id: 1,
    image: slide1,
    alt: "Tábuas de corte artesanais com carne e faca",
    text: "Tábuas artesanais para quem valoriza o churrasco de verdade.",
  },
  {
    id: 2,
    image: slide2,
    alt: "Trabalho manual em madeira detalhado",
    text: "Cada detalhe feito à mão.",
  },
  {
    id: 3,
    image: slide3,
    alt: "Mesa posta com tábuas de madeira e alimentos",
    text: "Presente nas melhores histórias.",
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Tábua Rústica Ipe",
    category: "Churrasco",
    image: project1,
    description: "Acabamento em óleo mineral e cera de abelha.",
  },
  {
    id: 2,
    title: "Gamela de Teca",
    category: "Cozinha",
    image: project1,
    description: "Design ergonômico para servir.",
  },
];
