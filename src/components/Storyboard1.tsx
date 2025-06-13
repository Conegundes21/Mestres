import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Gabriel Santos",
    role: "Tech Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=gabriel",
    content:
      "A metodologia é revolucionária. Consegui equilibrar vida pessoal e profissional como nunca antes.",
    rating: 5,
  },
  {
    name: "Isabella Costa",
    role: "Product Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=isabella",
    content:
      "As técnicas de foco e produtividade transformaram completamente minha forma de trabalhar.",
    rating: 5,
  },
  {
    name: "João Silva",
    role: "Desenvolvedor Senior",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
    content:
      "Esse programa mudou completamente minha carreira. Em apenas 6 meses, consegui uma promoção e aumento significativo.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Tech Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    content:
      "A metodologia é simplesmente fantástica. Consegui implementar mudanças reais que impactaram toda minha equipe.",
    rating: 5,
  },
  {
    name: "Pedro Costa",
    role: "Desenvolvedor Pleno",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
    content:
      "O investimento valeu cada centavo. O conteúdo é prático e aplicável desde o primeiro dia.",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Desenvolvedora Frontend",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
    content:
      "O programa superou todas as minhas expectativas. A metodologia é clara e os resultados são reais.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Desenvolvedor Full Stack",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=roberto",
    content:
      "Depois de aplicar o método, minha produtividade dobrou e consegui uma promoção em apenas 3 meses.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=fernanda",
    content:
      "O programa me ajudou a superar o síndrome do impostor e hoje lidero uma equipe incrível.",
    rating: 5,
  },
];

export default function Storyboard1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = defaultTestimonials.length - itemsPerView;

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
    <section
      className="bg-gradient-to-b from-zinc-900 to-black py-16 relative"
      id="evidence-section"
      data-apollo-section="evidence"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900 to-transparent" />
      <div className="container mx-auto px-4">
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
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">
                +1000 Histórias de Sucesso
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              O Que Nossos Alunos Dizem
            </h3>
            <p className="text-zinc-400">
              Descubra como nosso método tem transformado vidas
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-emerald-400 hover:bg-black/80 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-emerald-400 hover:bg-black/80 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Carousel */}
            <div className="overflow-hidden mx-8">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {defaultTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`w-full ${itemsPerView === 3 ? "md:w-1/3" : ""} flex-shrink-0 px-2`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 p-[1px] transition-all duration-300 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600 group">
                      <div className="relative bg-zinc-900 rounded-lg overflow-hidden p-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-50 group-hover:animate-shimmer" />
                        <div className="relative space-y-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full border-2 border-emerald-400"
                            />
                            <div>
                              <h3 className="font-semibold text-emerald-300">
                                {testimonial.name}
                              </h3>
                              <p className="text-zinc-400 text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-emerald-400 fill-emerald-400"
                              />
                            ))}
                          </div>

                          <div className="relative">
                            <Quote className="w-8 h-8 text-emerald-400/20 absolute -top-2 -left-2" />
                            <p className="text-zinc-300 relative z-10 pl-6">
                              {testimonial.content}
                            </p>
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
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
