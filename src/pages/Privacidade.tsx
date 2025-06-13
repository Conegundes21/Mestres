import React from "react";

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center py-12 px-4">
      <section className="w-full max-w-2xl bg-zinc-900 rounded-lg border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.10)] p-8">
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6 text-center">Políticas de Privacidade</h1>
        <p className="text-zinc-300 mb-4">Sua privacidade é fundamental para nós. Esta política detalha como coletamos, utilizamos, protegemos e compartilhamos suas informações ao acessar nosso site.</p>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">1. Coleta de Informações</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Informações fornecidas por você: nome, e-mail, telefone, etc.</li>
          <li>Dados de navegação: endereço IP, localização, tipo de dispositivo, navegador, páginas acessadas.</li>
          <li>Cookies e tecnologias similares para melhorar sua experiência.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">2. Uso das Informações</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Personalizar sua experiência e oferecer conteúdos relevantes.</li>
          <li>Melhorar nossos serviços, produtos e atendimento.</li>
          <li>Enviar comunicações, novidades e promoções (você pode cancelar a qualquer momento).</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">3. Compartilhamento de Dados</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Não vendemos ou compartilhamos seus dados pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.</li>
          <li>Podemos compartilhar dados com parceiros para melhorar nossos serviços, sempre com proteção adequada.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">4. Cookies</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Utilizamos cookies para analisar o uso do site, personalizar conteúdo e anúncios.</li>
          <li>Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar a experiência no site.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">5. Segurança</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">6. Direitos do Usuário</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento.</li>
          <li>Para exercer seus direitos, entre em contato conosco.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">7. Alterações nesta Política</h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-1 mb-4">
          <li>Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente.</li>
        </ul>
        <h2 className="text-emerald-400 font-semibold mt-6 mb-2">8. Contato</h2>
        <p className="text-zinc-400 mb-2">Em caso de dúvidas, solicitações ou para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@mestresdodesenvolvimento.com" className="text-emerald-400 underline">contato@mestresdodesenvolvimento.com</a></p>
      </section>
    </main>
  );
} 