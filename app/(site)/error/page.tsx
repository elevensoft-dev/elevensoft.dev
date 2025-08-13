import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Página de Erro - Elevensoft",
  description: "Página de erro da Elevensoft",
  // other metadata
};

const ErroPage = () => {
  return (
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55 bg-neutral-950">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/images/shape/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        />

        <h2 className="mb-5 text-2xl font-semibold text-white md:text-4xl">
          Esta Página Não Existe
        </h2>
        <p className="mb-7.5 text-neutral-300 leading-relaxed">
          A página que você estava procurando parece ter sido movida, deletada ou
          não existe.
        </p>

        <a
          href="/"
          className="btn-gradient rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
        >
          Voltar para o Início
          <svg
            className="fill-black"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ErroPage;
