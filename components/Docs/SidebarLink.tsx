"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xl bg-neutral-800/50 backdrop-blur-sm px-3 py-2 text-base text-white hover:bg-neutral-700/50 transition-all duration-200`}
        >
          Introdução
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xl px-3 py-2 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/30 transition-all duration-200`}
        >
          Guia do Template Bootstrap
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xl px-3 py-2 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/30 transition-all duration-200`}
        >
          Guia de Estilo
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xl px-3 py-2 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/30 transition-all duration-200`}
        >
          Usando Componentes Tailwind
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
