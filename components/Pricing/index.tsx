"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-neutral-950">
        <div className="mx-auto max-w-c-1315 px-6 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PLANOS DE PREÇOS`,
                subtitle: `Preços Simples`,
                description: `Escolha o plano que melhor se adapta às suas necessidades de segurança e soberania digital.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-16 max-w-[1207px] px-6 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap xl:gap-12">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-xl border border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm p-8 shadow-2xl hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-800/50 md:w-[45%] lg:w-1/3 xl:p-12">
              <h3 className="mb-8 text-3xl font-bold text-white xl:text-sectiontitle3">
                R$ 997{" "}
                <span className="text-regular text-neutral-300">
                  /mês
                </span>
              </h3>
              <h4 className="mb-3 text-para2 font-medium text-white">
                Plano Básico
              </h4>
              <p className="text-neutral-300">Ideal para pequenas empresas iniciando sua jornada de soberania digital.</p>

              <div className="mt-9 border-t border-neutral-800/50 pb-12 pt-9">
                <ul>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Acesso ao ESH
                  </li>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Suporte por email
                  </li>
                  <li className="mb-4 text-neutral-300 opacity-40 last:mb-0">
                    ❌ Suporte prioritário
                  </li>
                  <li className="mb-4 text-neutral-300 opacity-40 last:mb-0">
                    ❌ Treinamento personalizado
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-orange-400 transition-all duration-300 hover:text-orange-300"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Escolher Plano
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-xl border border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm p-8 shadow-2xl hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-800/50 md:w-[45%] lg:w-1/3 xl:p-12">
              <div className="absolute -right-3.5 top-8 -rotate-90 rounded-bl-full rounded-tl-full bg-gradient-to-r from-orange-500 to-yellow-500 px-4.5 py-1.5 text-metatitle font-medium uppercase text-black">
                popular
              </div>

              <h3 className="mb-8 text-3xl font-bold text-white xl:text-sectiontitle3">
                R$ 1.997{" "}
                <span className="text-regular text-neutral-300">
                  /mês
                </span>
              </h3>
              <h4 className="mb-3 text-para2 font-medium text-white">
                Plano Profissional
              </h4>
              <p className="text-neutral-300">Solução completa para empresas que buscam controle total e segurança máxima.</p>

              <div className="mt-9 border-t border-neutral-800/50 pb-12 pt-9">
                <ul>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Acesso completo à plataforma
                  </li>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Suporte prioritário 24/7
                  </li>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Treinamento da equipe
                  </li>
                  <li className="mb-4 text-neutral-300 opacity-40 last:mb-0">
                    ❌ Consultoria estratégica
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.3)]"
              >
                Escolher Plano
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-xl border border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm p-8 shadow-2xl hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-800/50 md:w-[45%] lg:w-1/3 xl:p-12">
              <h3 className="mb-8 text-3xl font-bold text-white xl:text-sectiontitle3">
                R$ 4.997{" "}
                <span className="text-regular text-neutral-300">
                  /mês
                </span>
              </h3>
              <h4 className="mb-3 text-para2 font-medium text-white">
                Plano Enterprise
              </h4>
              <p className="text-neutral-300">Para grandes corporações que exigem o máximo em segurança e personalização.</p>

              <div className="mt-9 border-t border-neutral-800/50 pb-12 pt-9">
                <ul>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Tudo do plano Profissional
                  </li>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Consultoria estratégica
                  </li>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ Implementação personalizada
                  </li>
                  <li className="mb-4 text-neutral-300 last:mb-0">
                    ✅ SLA garantido
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-orange-400 transition-all duration-300 hover:text-orange-300"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Escolher Plano
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
