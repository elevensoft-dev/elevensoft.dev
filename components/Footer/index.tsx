"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* <!-- ===== Footer Start ===== --> */}
      <footer className="bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800/50">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8 py-12 lg:py-16">
            <div className="col-span-6 lg:col-span-3">
              <div className="mb-8">
                <Link href="/" className="text-2xl font-bold gradient-text">
                  Elevensoft
                </Link>
              </div>
              <p className="mb-6 text-neutral-300 leading-relaxed">
                A Elevensoft não vende produtos. Nós entregamos <strong className="text-orange-400">Soberania Digital</strong>. 
                Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono.
              </p>
              <p className="text-sm text-neutral-400">
                <strong className="text-yellow-400">ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <h4 className="mb-8 text-lg font-semibold text-white">Plataforma</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/plataforma" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    Visão Estratégica
                  </Link>
                </li>
                <li>
                  <a
                    href="https://esh.elevensoft.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    ESH - Controle Central
                  </a>
                </li>
                <li>
                  <Link href="/esut" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    ESUT - Execução Segura
                  </Link>
                </li>
                <li>
                  <Link href="/keyring" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    KEYRING - Inteligência
                  </Link>
                </li>
                <li>
                  <Link href="/el-guardian" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    EL GUARDIAN - Fundação
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <h4 className="mb-8 text-lg font-semibold text-white">Empresa</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/sobre" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/seguranca" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="/o-jeito-elevensoft" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    O Jeito Elevensoft
                  </Link>
                </li>
                <li>
                  <Link href="/precos" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <h4 className="mb-8 text-lg font-semibold text-white">Suporte</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/docs" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    Contato
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/X2DMDA457ASDN1"
                    target="_blank"
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-3">
              <h4 className="mb-8 text-lg font-semibold text-white">Pronto para a Soberania?</h4>
              <p className="mb-6 text-neutral-300 leading-relaxed">
                Agende uma demonstração e descubra como transformar sua segurança fragmentada em uma fortaleza unificada.
              </p>
              <a
                href="https://wa.me/message/X2DMDA457ASDN1"
                target="_blank"
                className="btn-gradient-sm inline-flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
              >
                Agendar Demonstração
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800/50 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-400 text-sm">
                © 2024 Elevensoft. Todos os direitos reservados. Soberania Digital é nossa missão.
              </p>
              <div className="flex items-center space-x-4 text-sm text-neutral-400">
                <Link href="/seguranca" className="hover:text-white transition-colors duration-200">
                  Política de Segurança
                </Link>
                <Link href="/sobre" className="hover:text-white transition-colors duration-200">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ===== Footer End ===== --> */}
    </>
  );
};

export default Footer;
