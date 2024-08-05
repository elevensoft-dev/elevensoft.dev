import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div> */}

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Parceria eficaz entre clientes de TI e desenvolvedores de
                  software: Estratégias para sucesso
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Willian Souza
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Publicado em: 30/07/2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Categoria: Blog
                    </span>
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    No acelerado universo da tecnologia da informação, uma
                    parceria bem-sucedida entre clientes e desenvolvedores de
                    software é essencial. Essa colaboração pode determinar o
                    sucesso de projetos personalizados, que demandam uma
                    compreensão profunda das necessidades e desafios específicos
                    de cada cliente. Neste artigo, vamos explorar estratégias
                    que os clientes de TI podem adotar para colaborar de maneira
                    mais eficiente com equipes de desenvolvimento, assegurando
                    resultados que combinem inovação, funcionalidade e
                    satisfação do usuário final.
                  </p>

                  <h3 className="pt-8">
                    Estratégias para uma Colaboração Eficaz
                  </h3>

                  <ul>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          1.
                        </span>
                        <span className="text-lg">
                          Envolvimento Contínuo dos Clientes
                        </span>
                      </h4>
                      <p>
                        No contexto ágil, a participação dos clientes é
                        constante em todas as fases do desenvolvimento. Isso
                        garante que o produto final esteja sempre alinhado com
                        as expectativas do usuário, permitindo ajustes contínuos
                        e melhorias ao longo do processo.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          2.
                        </span>
                        <span className="text-lg">
                          Reuniões Diárias e Alinhamento Constante
                        </span>
                      </h4>
                      <p>
                        Reuniões diárias, como as “dailys” do Scrum, são
                        fundamentais para promover transparência e
                        responsabilidade dentro da equipe. Esses encontros
                        curtos ajudam a manter todos alinhados e prontos para
                        reagir rapidamente a quaisquer mudanças ou desafios que
                        surgirem.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          3.
                        </span>
                        <span className="text-lg">Comunicação Eficaz</span>
                      </h4>
                      <p>
                        A comunicação clara e constante é vital para o sucesso
                        do projeto. Com o trabalho remoto se tornando mais
                        comum, utilizar ferramentas de comunicação digital, como
                        Zoom e Slack, é essencial para manter a equipe conectada
                        e garantir que todos estejam na mesma página.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          4.
                        </span>
                        <span className="text-lg">
                          Definição Clara de Prioridades
                        </span>
                      </h4>
                      <p>
                        No desenvolvimento ágil, priorizar tarefas é crucial.
                        Utilizar metodologias como MoSCoW (Must-haves,
                        Should-haves, Could-haves, Won’t-haves) ajuda a focar
                        nas funcionalidades mais importantes, assegurando que os
                        recursos sejam usados de maneira eficiente.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          5.
                        </span>
                        <span className="text-lg">
                          Planejamento e Avaliação de Sprints
                        </span>
                      </h4>
                      <p>
                        As sprints devem ser bem planejadas para evitar
                        sobrecarga e garantir foco. Após cada sprint, é
                        importante realizar uma retrospectiva para identificar
                        pontos de melhoria e celebrar os sucessos, promovendo um
                        ciclo contínuo de aprendizado e aperfeiçoamento.
                      </p>
                    </li>
                  </ul>
                  <h3 className="pt-8">Dicas para Clientes de TI</h3>

                  <ul>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          1.
                        </span>
                        <span className="text-lg">
                          Compreensão Profunda do Negócio
                        </span>
                      </h4>
                      <p>
                        Entender o core do negócio e como ele gera valor é
                        fundamental para os clientes de TI. Essa compreensão
                        permite uma comunicação clara das necessidades e
                        expectativas aos desenvolvedores, facilitando a criação
                        de soluções alinhadas com os objetivos estratégicos da
                        empresa.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          2.
                        </span>
                        <span className="text-lg">
                          Identificação das Necessidades Específicas
                        </span>
                      </h4>
                      <p>
                        Após entender o panorama geral do negócio, é importante
                        focar nas necessidades específicas que motivam o
                        desenvolvimento do software. Identificar claramente os
                        problemas a serem resolvidos ou as oportunidades a serem
                        exploradas é essencial para o sucesso do projeto.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          3.
                        </span>
                        <span className="text-lg">Atualização Constante</span>
                      </h4>
                      <p>
                        Manter-se atualizado sobre as últimas tendências e
                        inovações tecnológicas é crucial. Isso não só enriquece
                        a colaboração, mas também permite que os clientes
                        compreendam melhor as soluções propostas pelos
                        desenvolvedores e contribuam de maneira mais eficaz.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          4.
                        </span>
                        <span className="text-lg">
                          Adoção de Metodologias Ágeis
                        </span>
                      </h4>
                      <p>
                        Metodologias ágeis proporcionam maior flexibilidade e
                        rapidez no aprendizado. Adotar essas abordagens permite
                        uma adaptação mais rápida às mudanças, essencial em um
                        mercado de TI em constante evolução.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          5.
                        </span>
                        <span className="text-lg">
                          Investimento em Arquitetura de Software
                        </span>
                      </h4>
                      <p>
                        Uma arquitetura bem planejada pode evitar retrabalho e
                        economizar tempo e recursos. Envolver-se nessa fase do
                        projeto garante que o produto final atenda às
                        necessidades do cliente e seja sustentável a longo
                        prazo.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          6.
                        </span>
                        <span className="text-lg">
                          Foco na Experiência do Usuário (UX)
                        </span>
                      </h4>
                      <p>
                        A experiência do usuário é um fator crucial. Investir em
                        práticas de UX assegura que o produto final seja
                        funcional e intuitivo. Clientes de TI devem valorizar e
                        participar ativamente no desenvolvimento da experiência
                        do usuário.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="flex items-center gap-x-2">
                        <span className="text-lg font-light opacity-50">
                          7.
                        </span>
                        <span className="text-lg">Monitoramento Contínuo</span>
                      </h4>
                      <p>
                        Após a implementação do projeto, monitorar e avaliar seu
                        desempenho é vital. Analisar o que funcionou bem e o que
                        pode ser melhorado ajuda a aprimorar processos futuros e
                        a garantir um ciclo de melhoria contínua.
                      </p>
                    </li>
                  </ul>

                  <h3 className="pt-8">Conclusão</h3>
                  <p>
                    A colaboração eficaz entre clientes de TI e desenvolvedores
                    de software é essencial para o sucesso de projetos sob
                    medida. Adotar estratégias de desenvolvimento ágil,
                    compreender profundamente as necessidades do negócio,
                    manter-se atualizado com as tendências tecnológicas e focar
                    na experiência do usuário são práticas que podem levar a
                    parcerias mais produtivas e resultados satisfatórios.
                    Mantendo uma comunicação aberta e contínua, equipes de TI e
                    desenvolvedores podem criar soluções inovadoras que que
                    atendam efetivamente às necessidades do mercado.
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
