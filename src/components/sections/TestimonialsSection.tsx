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
    role: "Empreendedor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=gabriel",
    content:
      "Eu já tinha tentado de tudo para mudar meus hábitos, mas só depois desse método consegui realmente destravar minha mente. Hoje sou outra pessoa, mais focado e realizado. Só tenho a agradecer!",
    rating: 5,
  },
  {
    name: "Isabella Costa",
    role: "Estudante de Psicologia",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=isabella",
    content:
      "Nunca imaginei que conseguiria largar velhos vícios e criar uma rotina saudável. Foi um divisor de águas na minha vida. Obrigada por me mostrar que é possível!",
    rating: 5,
  },
  {
    name: "João Silva",
    role: "Analista de Dados",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
    content:
      "Sempre fui muito ansioso e vivia procrastinando. O programa me ajudou a dar o primeiro passo e não parar mais. Hoje olho pra trás e vejo o quanto evoluí. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Coach de Vida",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    content:
      "O que mais me surpreendeu foi como pequenas mudanças diárias fizeram tanta diferença. Sinto que finalmente tenho o controle da minha vida. Gratidão eterna!",
    rating: 5,
  },
  {
    name: "Pedro Costa",
    role: "Autônomo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
    content:
      "Eu achava que disciplina não era pra mim, mas estava enganado. O método é simples, direto e realmente funciona. Obrigado por me ajudar a conquistar minhas metas!",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
    content:
      "Passei anos tentando mudar sozinha, mas só consegui depois de aplicar o que aprendi aqui. Hoje sou mais confiante e realizada. Valeu cada segundo!",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Professor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=roberto",
    content:
      "Minha família e amigos notaram a diferença em mim. Estou mais leve, focado e feliz. Só tenho a agradecer por tudo que aprendi!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Consultora de Carreira",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=fernanda",
    content:
      "Se você está em dúvida, só vai! Eu também estava, mas foi a melhor decisão que tomei. Consegui superar bloqueios que me travavam há anos. Muito obrigada!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView =
    typeof window !== "undefined"
      ? window.innerWidth < 640
        ? 1
        : window.innerWidth < 1024
          ? 2
          : 3
      : 3;
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
    <section className="bg-black py-16">
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
