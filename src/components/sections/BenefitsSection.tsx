import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

const benefits: Benefit[] = [
  {
    title: "Método Comprovado",
    description: "Estratégias testadas e aprovadas por centenas de alunos",
    icon: <CheckCircle className="w-12 h-12 text-emerald-400" />,
  },
  {
    title: "Resultados Rápidos",
    description: "Veja transformações significativas em semanas, não meses",
    icon: <Zap className="w-12 h-12 text-amber-400" />,
  },
  {
    title: "Suporte Contínuo",
    description: "Acompanhamento personalizado durante toda sua jornada",
    icon: <ArrowRight className="w-12 h-12 text-purple-400" />,
  },
];

export default function BenefitsSection() {
  return (
    <section
      className="bg-black py-8 md:py-10 relative"
      id="pitch-section"
      data-apollo-section="pitch"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-amber-400 to-purple-400 bg-clip-text text-transparent"
            >
              Por que Escolher Nosso Método?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-zinc-400"
            >
              Descubra como podemos transformar sua realidade
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-[1px] bg-gradient-to-r from-emerald-400 via-amber-400 to-purple-400 rounded-lg">
              <div className="bg-zinc-900 px-6 py-2 rounded-lg">
                <p className="text-zinc-300">
                  Mais de{" "}
                  <span className="font-bold text-white">1000+ alunos</span>{" "}
                  transformados
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
