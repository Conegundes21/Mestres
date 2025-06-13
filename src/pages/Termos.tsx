import React from "react";

export default function Termos() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center py-12 px-4">
      <section className="w-full max-w-2xl bg-zinc-900 rounded-lg border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.10)] p-8">
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6 text-center">Termos e Condições</h1>
        <p className="text-zinc-300 mb-4">Ao acessar e utilizar este site, você concorda com os termos e condições abaixo. Leia atentamente:</p>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">1. Uso do Site</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>O conteúdo é destinado apenas para uso pessoal e não comercial.</li>
          <li>É proibida a reprodução, distribuição ou modificação sem autorização prévia.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">2. Propriedade Intelectual</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Todo o conteúdo, marcas, logos e materiais são de propriedade da Mestres do Desenvolvimento ou licenciados.</li>
          <li>O uso indevido pode resultar em sanções civis e criminais.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">3. Responsabilidades</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Não garantimos que o site estará sempre disponível ou livre de erros.</li>
          <li>Não nos responsabilizamos por danos decorrentes do uso ou da impossibilidade de uso do site.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">4. Links Externos</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Podemos fornecer links para sites de terceiros, mas não nos responsabilizamos pelo conteúdo ou práticas desses sites.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">5. Alterações nos Termos</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio.</li>
          <li>O uso continuado do site após alterações implica aceitação dos novos termos.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">6. Foro</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Eventuais disputas serão resolvidas no foro da comarca de domicílio do usuário, conforme legislação vigente.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">7. Contato</h2>
        <p className="text-zinc-400 mb-2">Para dúvidas ou solicitações, entre em contato pelo e-mail: <a href="mailto:contato@mestresdodesenvolvimento.com" className="text-emerald-400 underline">contato@mestresdodesenvolvimento.com</a></p>
      </section>
    </main>
  );
} 