import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentação - Elevensoft",
  description: "Documentação completa da plataforma Elevensoft para Soberania Digital",
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32 dark:bg-neutral-950 light:bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-xl dark:border-neutral-800/50 light:border-neutral-200/50 border p-4 shadow-2xl transition-all dark:bg-neutral-900/95 light:bg-white/95 backdrop-blur-xl">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-2xl dark:bg-neutral-900 light:bg-white rounded-xl dark:bg-neutral-900/50 light:bg-white/50 backdrop-blur-sm px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] dark:border-neutral-800/50 light:border-neutral-200/50 border">
                <h1 className="dark:text-white light:text-neutral-900 mb-6">Bem-vindo à Documentação Elevensoft</h1>

                <p className="dark:text-neutral-300 light:text-neutral-700 text-base leading-relaxed mb-4">
                  Esta documentação serve como guia completo para implementar e utilizar 
                  a plataforma Elevensoft para Soberania Digital.
                </p>
                <p className="dark:text-neutral-300 light:text-neutral-700 text-base leading-relaxed">
                  Para suporte técnico e demonstrações, entre em contato:{" "}
                  <b>
                    <a href="https://wa.me/message/X2DMDA457ASDN1" className="text-orange-400 hover:text-orange-300 transition-colors">
                      WhatsApp Elevensoft
                    </a>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
