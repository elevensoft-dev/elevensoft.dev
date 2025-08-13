import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    designation: "CTO @TechCorp",
    image: image1,
    content:
      "A plataforma Elevensoft transformou completamente nossa segurança. Antes tínhamos 15 ferramentas diferentes, agora temos controle total em um só lugar. ROI de 2.156% em apenas 6 meses.",
  },
  {
    id: 2,
    name: "Maria Santos",
    designation: "Diretora de Segurança @BankSecure",
    image: image2,
    content:
      "Implementamos a Elevensoft e eliminamos 100% dos incidentes de segurança. A auditoria em tempo real e o controle granular nos deram a soberania que sempre buscamos.",
  },
  {
    id: 3,
    name: "Pedro Costa",
    designation: "DevOps Lead @CloudTech",
    image: image1,
    content:
      "O ESUT é revolucionário. Nossos engenheiros agora executam comandos com segurança total, sem risco de erros. A automação nos economizou 40 horas por semana.",
  },
  {
    id: 4,
    name: "Ana Oliveira",
    designation: "Infraestrutura @DataCenter",
    image: image2,
    content:
      "O ESH nos deu visibilidade total sobre todas as sessões. Antes era um caos, agora temos controle absoluto. A Elevensoft entregou exatamente o que prometeu.",
  },
];
