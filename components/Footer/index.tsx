"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* <!-- ===== Footer Start ===== --> */}
      <footer className="bg-neutral-950 border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-7.5 py-10 lg:py-15">
            <div className="col-span-6 lg:col-span-3">
              <div className="mb-7.5">
                <Link href="/" className="text-2xl font-bold text-white">
                  Elevensoft
                </Link>
              </div>
              <p className="mb-6 text-neutral-300">
                A Elevensoft não vende produtos. Nós entregamos <strong>Soberania Digital</strong>. 
                Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <h4 className="mb-7.5 text-lg font-semibold text-white">Plataforma</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/plataforma" className="text-neutral-300 hover:text-white transition-colors">
                    Visão Estratégica
                  </Link>
                </li>
                <li>
                  <a
                    href="https://esh.elevensoft.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    ESH - Controle Central
                  </a>
                </li>
                <li>
                  <Link href="/esut" className="text-neutral-300 hover:text-white transition-colors">
                    ESUT - Execução Segura
                  </Link>
                </li>
                <li>
                  <Link href="/keyring" className="text-neutral-300 hover:text-white transition-colors">
                    KEYRING - Inteligência
                  </Link>
                </li>
                <li>
                  <Link href="/el-guardian" className="text-neutral-300 hover:text-white transition-colors">
                    EL GUARDIAN - Fundação
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <h4 className="mb-7.5 text-lg font-semibold text-white">Empresa</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/sobre" className="text-neutral-300 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/seguranca" className="text-neutral-300 hover:text-white transition-colors">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="/o-jeito-elevensoft" className="text-neutral-300 hover:text-white transition-colors">
                    O Jeito Elevensoft
                  </Link>
                </li>
                <li>
                  <Link href="/precos" className="text-neutral-300 hover:text-white transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-neutral-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <h4 className="mb-7.5 text-lg font-semibold text-white">Suporte</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/docs" className="text-neutral-300 hover:text-white transition-colors">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/X2DMDA457ASDN1"
                    target="_blank"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-3">
              <h4 className="mb-7.5 text-lg font-semibold text-white">Pronto para a Soberania?</h4>
              <p className="mb-6 text-neutral-300">
                Agende uma demonstração e descubra como transformar sua segurança fragmentada em uma fortaleza unificada.
              </p>
              <a
                href="https://wa.me/message/X2DMDA457ASDN1"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-orange-400 px-6 py-3 text-black font-medium hover:bg-orange-500 transition-colors"
              >
                Agendar Demonstração
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-400 text-sm">
                © 2024 Elevensoft. Todos os direitos reservados. Soberania Digital é nossa missão.
              </p>
              <div className="flex items-center space-x-4 text-sm text-neutral-400">
                <Link href="/seguranca" className="hover:text-white transition-colors">
                  Política de Segurança
                </Link>
                <Link href="/sobre" className="hover:text-white transition-colors">
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
