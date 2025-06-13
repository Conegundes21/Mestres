import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-emerald-400 py-6 shadow-[0_0_30px_rgba(16,185,129,0.10)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between justify-center gap-2 md:gap-4 px-4 text-center">
        <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          &copy; {new Date().getFullYear()} Mestres do Desenvolvimento. Todos os direitos reservados.
        </span>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-xs md:text-sm items-center justify-center">
          <a href="/privacidade" className="hover:text-white transition-colors underline underline-offset-4 decoration-emerald-400">Políticas de Privacidade</a>
          <span className="hidden md:inline text-emerald-300">|</span>
          <a href="/termos" className="hover:text-white transition-colors underline underline-offset-4 decoration-emerald-400">Termos e Condições</a>
        </div>
      </div>
    </footer>
  );
} 