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
    role: "Marketing Digital",
    image: "https://images.pexels.com/photos/14284275/pexels-photo-14284275.jpeg",
    content:
      "A metodologia é revolucionária! Consegui equilibrar vida pessoal e profissional como nunca antes.",
    rating: 5,
  },
  {
    name: "Lucas Alves",
    role: "Empreendedor",
    image: "https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg",
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

export default function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = defaultTestimonials.length - itemsPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
  };

  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full mb-4">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Histórias de Sucesso</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-zinc-400 text-lg">
              Descubra como nosso método tem transformado vidas
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-2 rounded-full bg-black/50 text-amber-400 hover:bg-black/80 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-2 rounded-full bg-black/50 text-amber-400 hover:bg-black/80 transition-all"
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
                  <div
                    key={index}
                    className={`w-full ${itemsPerView === 3 ? "md:w-1/3" : ""} flex-shrink-0 px-2 md:px-4`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 p-[1px] transition-all duration-300 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-600 group h-full"
                    >
                      <div className="relative bg-zinc-900 p-6 rounded-lg h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-50 group-hover:animate-shimmer" />
                        <div className="relative space-y-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full border-2 border-amber-400"
                            />
                            <div>
                              <h3 className="font-semibold text-amber-200">
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
                                className="w-5 h-5 text-amber-400 fill-amber-400"
                              />
                            ))}
                          </div>

                          <div className="relative">
                            <Quote className="w-8 h-8 text-amber-400/20 absolute -top-2 -left-2" />
                            <p className="text-zinc-300 relative z-10 pl-6">
                              {testimonial.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet Points */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? "bg-amber-400 w-4" : "bg-amber-400/30"}`}
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
