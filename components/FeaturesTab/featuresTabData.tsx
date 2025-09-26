import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: 1,
    title: "ESH - Eleven Shell Hub",
    subtitle: "O Comando Central da Sua Infraestrutura",
    description: "O cérebro que centraliza, audita e comanda todo o acesso humano à infraestrutura crítica. Acesso sem controle é uma porta aberta para o desastre.",
    features: [
      "Segurança total com controle granular",
      "Auditoria e conformidade em tempo real",
      "Visualização ao vivo de todas as sessões",
      "Replay de sessões para análise forense",
      "Alertas inteligentes para atividades suspeitas"
    ],
    image: "/images/features/bg_1.png",
    link: "/esh"
  },
  {
    id: 2,
    title: "ESUT - Eleven Shell Utility Tool",
    subtitle: "Execução Segura, Erro Zero",
    description: "O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal. Transforme comandos perigosos em operações seguras.",
    features: [
      "Execução guiada e à prova de erros",
      "Políticas de segurança automatizadas",
      "Menu de comandos pré-aprovados",
      "Prevenção de comandos perigosos",
      "Logs detalhados de todas as operações"
    ],
    image: "/images/features/bg_2.png",
    link: "/esut"
  },
  {
    id: 3,
    title: "KEYRING",
    subtitle: "Serviço de Inteligência",
    description: "O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema. Controle total sobre quem acessa o quê.",
    features: [
        "Criação e edição de licenças de software",
      "Autenticação multifator integrada",
      "Controle de acesso baseado em roles",
      "Licenciamento e compliance",
      "Integração com sistemas existentes"
    ],
    image: "/images/features/bg_3.png",
    link: "/keyring"
  },
  {
    id: 4,
    title: "EL GUARDIAN",
    subtitle: "Fundação Blindada",
    description: "A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; nós blindamos o nosso próprio código, porque a soberania começa em casa.",
    features: [
        "Ofuscação completa de código PHP",
      "Auditoria de segurança contínua",
      "Prevenção de vulnerabilidades",
      "Compliance com padrões internacionais",
      "Transparência total de segurança"
    ],
    image: "/images/features/bg_1.png",
    link: "/el-guardian"
  }
];

export default featuresTabData;
