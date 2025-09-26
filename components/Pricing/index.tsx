"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* Pricing Table Section */}
      <section className="section-elegant bg-neutral-950">
        <div className="container-elegant">
          {/* Section Title */}
          <div className="mx-auto text-center mb-16">
            <h2 className="title-section text-center">
              <span className="gradient-text-hero">Planos de Preços</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Preços simples e transparentes para sua jornada de soberania digital
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
              {/* Pricing Item */}
              <div className="card-modern group relative p-6 sm:p-8 xl:p-12">
                <h3 className="title-responsive-md dark:text-white light:text-neutral-900 mb-8">
                  R$ 997{" "}
                  <span className="text-regular dark:text-neutral-300 light:text-neutral-700">
                    /mês
                  </span>
                </h3>
                <h4 className="title-feature mb-3">
                  Plano Básico
                </h4>
                <p className="dark:text-neutral-300 light:text-neutral-700">Ideal para pequenas empresas iniciando sua jornada de soberania digital.</p>

                <div className="mt-9 dark:border-t-neutral-800/50 light:border-t-neutral-200/50 border-t pb-12 pt-9">
                  <ul>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Acesso ao ESH
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Suporte por email
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 opacity-40 last:mb-0">
                      ❌ Suporte prioritário
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 opacity-40 last:mb-0">
                      ❌ Treinamento personalizado
                    </li>
                  </ul>
                </div>

                <button
                  aria-label="Get the Plan button"
                  className="group/btn inline-flex items-center gap-2.5 font-medium text-orange-400 transition-all duration-300 hover:text-orange-300 touch-button"
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

              {/* Pricing Item */}
              <div className="card-modern group relative p-8 xl:p-12 md:w-[45%] lg:w-1/3">
                <div className="absolute -right-3.5 top-8 -rotate-90 rounded-bl-full rounded-tl-full bg-gradient-to-r from-orange-500 to-yellow-500 px-4.5 py-1.5 text-metatitle font-medium uppercase text-black">
                  popular
                </div>

                <h3 className="title-responsive-md dark:text-white light:text-neutral-900 mb-8">
                  R$ 1.997{" "}
                  <span className="text-regular dark:text-neutral-300 light:text-neutral-700">
                    /mês
                  </span>
                </h3>
                <h4 className="title-feature mb-3">
                  Plano Profissional
                </h4>
                <p className="dark:text-neutral-300 light:text-neutral-700">Solução completa para empresas que buscam controle total e segurança máxima.</p>

                <div className="mt-9 dark:border-t-neutral-800/50 light:border-t-neutral-200/50 border-t pb-12 pt-9">
                  <ul>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Acesso completo à plataforma
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Suporte prioritário 24/7
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Treinamento da equipe
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 opacity-40 last:mb-0">
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

              {/* Pricing Item */}
              <div className="card-modern group relative p-8 xl:p-12 md:w-[45%] lg:w-1/3">
                <h3 className="title-responsive-md dark:text-white light:text-neutral-900 mb-8">
                  R$ 4.997{" "}
                  <span className="text-regular dark:text-neutral-300 light:text-neutral-700">
                    /mês
                  </span>
                </h3>
                <h4 className="title-feature mb-3">
                  Plano Enterprise
                </h4>
                <p className="dark:text-neutral-300 light:text-neutral-700">Para grandes corporações que exigem o máximo em segurança e personalização.</p>

                <div className="mt-9 dark:border-t-neutral-800/50 light:border-t-neutral-200/50 border-t pb-12 pt-9">
                  <ul>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Tudo do plano Profissional
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Consultoria estratégica
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ Implementação personalizada
                    </li>
                    <li className="mb-4 dark:text-neutral-300 light:text-neutral-700 last:mb-0">
                      ✅ SLA garantido
                    </li>
                  </ul>
                </div>

                <button
                  aria-label="Get the Plan button"
                  className="group/btn inline-flex items-center gap-2.5 font-medium text-orange-400 transition-all duration-300 hover:text-orange-300 touch-button"
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
        </div>
      </section>
    </>
  );
};

export default Pricing;
