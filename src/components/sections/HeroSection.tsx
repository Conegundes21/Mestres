import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Since CountdownTimer component isn't ready yet, we'll create a placeholder
const CountdownTimer = () => {
  const [time, setTime] = useState(59);

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="bg-zinc-800/50 px-6 py-3 rounded-lg text-amber-400 text-2xl font-bold mb-4">
      {time > 0 ? `00:${minutes}:${seconds}` : "Tempo esgotado!"}
    </div>
  );
};

export default function HeroSection() {
  // Popup state
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [couponCode, setCouponCode] = useState("MESTRE10");
  const [popupTitle, setPopupTitle] = useState("Antes de sair, aproveite 10% OFF!");
  const [popupDesc, setPopupDesc] = useState("Use o cupom abaixo no checkout e garanta seu desconto exclusivo:");

  // Social Proof Popups
  const socialNames = [
    "Gabriel", "Lucas", "João", "Maria", "Ana", "Fernanda", "Pedro", "Isabela", "Rafael", "Juliana",
    "Bruno", "Camila", "Felipe", "Larissa", "Vinícius", "Patrícia", "André", "Amanda", "Rodrigo", "Beatriz",
    "Eduardo", "Carolina", "Thiago", "Mariana", "Leonardo", "Aline", "Gustavo", "Letícia", "Matheus", "Paula"
  ];
  const [showSocialPopup, setShowSocialPopup] = useState(false);
  const [socialPopupContent, setSocialPopupContent] = useState("");
  const [lastSocialIndex, setLastSocialIndex] = useState(-1);
  const [lastPeopleCount, setLastPeopleCount] = useState(0);
  const [socialPopupType, setSocialPopupType] = useState<'name' | 'people'>("name");

  useEffect(() => {
    // Desktop: exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (window.innerWidth > 768 && e.clientY <= 0) {
        setCouponCode("MESTRE10");
        setPopupTitle("Antes de sair, aproveite 10% OFF!");
        setPopupDesc("Use o cupom abaixo no checkout e garanta seu desconto exclusivo:");
        setShowExitPopup(true);
      }
    };
    document.addEventListener("mouseout", handleMouseLeave);

    // Mobile: scroll to bottom
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const scrollPosition = window.innerHeight + window.scrollY;
        const threshold = document.body.offsetHeight - 50;
        if (scrollPosition >= threshold) {
          setCouponCode("MESTRE5");
          setPopupTitle("Parabéns! Ganhe 5% OFF");
          setPopupDesc("Use o cupom abaixo no checkout e garanta seu desconto especial para mobile:");
          setShowExitPopup(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    let socialTimeout: NodeJS.Timeout;
    let socialInterval: NodeJS.Timeout;
    let running = true;

    const showRandomSocialPopup = () => {
      if (!running) return;
      // Alterna entre os dois tipos de mensagem
      if (Math.random() < 0.5) {
        // Nome
        const nameIndex = Math.floor(Math.random() * socialNames.length);
        setSocialPopupContent(`${socialNames[nameIndex]} acabou de adquirir! 🚀`);
        setSocialPopupType('name');
      } else {
        // Pessoas, número entre 5 e 23, nunca igual ao último
        let people;
        do {
          people = Math.floor(Math.random() * 19) + 5; // 5 a 23
        } while (people === lastPeopleCount);
        setLastPeopleCount(people);
        setSocialPopupContent(`${people} pessoas estão finalizando o pedido agora.`);
        setSocialPopupType('people');
      }
      setShowSocialPopup(true);
      setTimeout(() => setShowSocialPopup(false), 5200); // Popup visível por 5.2s
    };

    // Primeiro popup após 22s
    socialTimeout = setTimeout(() => {
      showRandomSocialPopup();
      // Depois, exibe a cada 30-45s
      socialInterval = setInterval(() => {
        showRandomSocialPopup();
      }, Math.floor(Math.random() * 15000) + 30000); // 30-45s
    }, 22000);

    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      running = false;
      clearTimeout(socialTimeout);
      clearInterval(socialInterval);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCheckout = () => {
    window.location.href = "https://pay.kirvano.com/1495deef-76af-4a03-a35a-45750c275b9a";
  };

  return (
    <>
      {showExitPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-emerald-400 shadow-xl rounded-2xl px-6 py-5 max-w-xs w-full relative flex flex-col items-center">
            <button
              className="absolute top-2 right-3 text-zinc-400 hover:text-red-500 text-xl font-bold"
              onClick={() => setShowExitPopup(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <span className="inline-block bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold px-3 py-1 rounded-full text-base mb-2 shadow">CUPOM ESPECIAL</span>
            <h2 className="text-lg font-extrabold text-white text-center mb-1">{popupTitle}</h2>
            <p className="text-zinc-300 text-center mb-3 text-sm">{popupDesc}</p>
            <div className="flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-1 mb-2">
              <span className="font-mono text-base text-amber-400 select-all">{couponCode}</span>
              <button
                onClick={handleCopy}
                className="ml-1 px-2 py-1 rounded bg-amber-400 text-black font-bold hover:bg-amber-500 transition text-xs"
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-base py-2 rounded-lg shadow transition-all duration-300"
            >
              IR PARA O CHECKOUT
            </button>
          </div>
        </div>
      )}
      {/* Social Proof Popup */}
      {showSocialPopup && socialPopupType === 'name' && (
        <div className="fixed left-1/2 bottom-6 z-50 -translate-x-1/2 animate-fade-in-up">
          <div className="flex items-center gap-3 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 shadow-xl rounded-full px-4 py-2 border border-emerald-400 min-w-[180px] max-w-xs">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-400/90 text-white font-bold text-base shadow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <span className="text-white font-medium text-sm md:text-base">{socialPopupContent}</span>
          </div>
        </div>
      )}
      {showSocialPopup && socialPopupType === 'people' && (
        <div className="fixed left-4 bottom-6 z-50 animate-fade-in-up">
          <div className="flex items-center gap-3 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 shadow-xl rounded-xl px-4 py-2 border border-emerald-400 min-w-[180px] max-w-xs">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-400/90 text-white font-bold text-base shadow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <span className="text-white font-medium text-sm md:text-base">{socialPopupContent}</span>
          </div>
        </div>
      )}
      <section
        className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden"
        id="headline-section"
      >
        {/* Background gradient effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent" /> */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        <div className="container mx-auto px-4 py-8 md:py-16 flex-1 flex flex-col justify-center items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl flex flex-col items-center text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold px-4 py-2 rounded-full mb-6"
            >
              Oferta Especial por Tempo Limitado
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-extrabold text-center text-white mb-4 leading-tight"
            >
              Existe um código silencioso que os grandes usam para moldar suas vidas...<br />
              <span className="text-red-500 drop-shadow-[0_2px_8px_rgba(239,68,68,0.7)]">E você nunca teve acesso.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-2xl text-zinc-200 text-center mb-8 max-w-2xl mx-auto"
            >
              Descubra como aplicar os mesmos princípios usados silenciosamente por atletas, líderes e bilionários, agora adaptado à sua realidade.
            </motion.p>

            {/* Video player em destaque */}
            <div className="w-full max-w-xl mb-8">
              {/* <VideoPlayer ... /> */}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="w-full flex flex-col items-center"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#vsl-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full max-w-md py-4 mb-5 bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold text-xl rounded-full shadow-lg hover:scale-105 transition group flex items-center justify-center"
              >
                Quero acessar o método agora!
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-3 justify-center mb-2">
                <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-2 rounded-full">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-emerald-300 font-semibold text-sm">Garantia Incondicional</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-2 rounded-full">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-emerald-300 font-semibold text-sm">Acesso vitalício</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2 }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-amber-500 via-yellow-500 to-transparent opacity-30 blur-3xl transform rotate-12" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-amber-500 via-yellow-500 to-transparent opacity-30 blur-3xl transform -rotate-12" />
        </motion.div>
      </section>
    </>
  );
}
