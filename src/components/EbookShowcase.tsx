import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Book } from "lucide-react";

interface Ebook {
  title: string;
  cover: string;
  category: string;
}

const ebooks: Ebook[] = [
  {
    title: "Mindset de Alta Performance",
    cover:
      "/Mindset.png",
    category: "Produtividade",
  },
  {
    title: "Hábitos dos Milionários",
    cover:
      "/hábitos.png",
    category: "Finanças",
  },
  {
    title: "Inteligência Emocional",
    cover:
      "/inteligência.png",
    category: "Desenvolvimento Pessoal",
  },
  {
    title: "Liderança Exponencial",
    cover:
      "/liderança.png",
    category: "Liderança",
  },
  {
    title: "Comunicação Persuasiva",
    cover:
      "/comunicação.png",
    category: "Comunicação",
  },
  {
    title: "Gestão do Tempo",
    cover: "/tempo.png",
    category: "Produtividade",
  },
  {
    title: "PNL",
    cover:
      "/pnl.png",
    category: "Descubra como Reprogramar sua vida com PNL",
  },
  {
    title: "Sabedoria",
    cover:
      "/sabedoria.png",
    category: "Você sabe do que nada Sabe?",
  },
];

export default function EbookShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = ebooks.length - itemsPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 rounded-lg border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full mb-4">
          <Book className="w-5 h-5" />
          <span className="text-sm font-medium">+78 Ebooks & Audiobooks</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
          Biblioteca Completa de Conhecimento
        </h3>
        <p className="text-zinc-400">
          Uma coleção premium de conteúdo para acelerar sua evolução
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-emerald-400 hover:bg-black/80 transition-all"
          aria-label="Previous books"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-emerald-400 hover:bg-black/80 transition-all"
          aria-label="Next books"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Books Carousel */}
        <div className="overflow-hidden mx-8">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {ebooks.map((book, index) => (
              <motion.div
                key={index}
                className={`w-full ${itemsPerView === 3 ? "md:w-1/3" : ""} flex-shrink-0 px-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 p-[1px] transition-all duration-300 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600 group">
                  <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-50 group-hover:animate-shimmer" />
                    <div className="relative aspect-[3/4]">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h4 className="font-semibold text-emerald-300 mb-1">
                            {book.title}
                          </h4>
                          <p className="text-sm text-zinc-300">
                            {book.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bullet Points */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? "bg-emerald-400 w-4" : "bg-emerald-400/30"}`}
              aria-label={`Go to book set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
