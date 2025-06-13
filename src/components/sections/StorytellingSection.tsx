import { motion } from "framer-motion";
import VideoPlayer from "@/components/VideoPlayer";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import {
  Play,
  ChevronDown,
  Brain,
  Target,
  Rocket,
  Coins,
  Shield,
  Clock,
  Zap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StorytellingSection() {
  return (
    <section
      id="vsl-section"
      className="bg-black py-20 relative"
      data-apollo-section="vsl-lead-story"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent leading-tight"
          >
            Esse protocolo mental já transformou milhares de vidas. A única pergunta é: você está pronto para sua virada?
          </motion.h2>

          {/* VSL Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mb-8 w-full max-w-4xl mx-auto space-y-8"
          >
            <VideoPlayer videoId="-gKAkSsfYN8" />

            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-lg md:text-xl text-zinc-300 mb-6">
                  Descubra como desenvolver hábitos poderosos e manter o foco em seus objetivos, mesmo diante dos maiores desafios.
                </p>
              </motion.div>

              <motion.div className="space-y-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative inline-block group"
                >
                  <Button
                    className="relative w-full max-w-xs mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg py-5 rounded-lg shadow-xl group transition-all duration-300"
                    onClick={() =>
                      (window.location.href =
                        "https://pay.kirvano.com/1495deef-76af-4a03-a35a-45750c275b9a")
                    }
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                    <span className="relative flex items-center justify-center gap-2 text-xl">
                      QUERO COMEÇAR AGORA!
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <p className="text-base md:text-lg text-zinc-400 mt-4">
                    Finalmente uma solução real para sair da estagnação e crescer de verdade.
                  </p>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl font-bold text-amber-300"
                >
                  🔥 Oferta Especial por Tempo Limitado 🔥
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Lead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8 text-lg md:text-xl text-center mb-16"
          >
            <p className="text-zinc-300">
              Imagine acordar todos os dias sabendo que você tem total controle
              sobre sua vida, seus hábitos e seu futuro...
            </p>
            <p className="text-zinc-400">
              Você já sentiu que está preso em um ciclo de procrastinação,
              estresse e falta de propósito?
            </p>
            <p className="text-amber-200 font-medium">
              Eu já estive nesse mesmo lugar... até descobrir um método que
              mudou minha vida para sempre.
            </p>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-6 text-lg md:text-xl text-zinc-400 mb-12"
          >
            <p>
              Anos atrás, eu estava completamente perdido... Tentava de tudo –
              cursos, livros, vídeos no YouTube – mas nada realmente mudava
              minha vida. Era como estar preso em uma roda gigante de frustração
              e estagnação.
            </p>

            <p>
              Até que, após anos de pesquisa e experimentação obsessiva,
              descobri algo extraordinário: um padrão oculto usado pelos
              verdadeiros vencedores. Um conjunto de princípios tão poderosos
              que são capazes de reprogramar completamente sua mente para o
              sucesso.
            </p>

            <p className="text-lg md:text-xl text-zinc-300 font-medium">
              Foi assim que nasceu o Mestres do Desenvolvimento – um método
              revolucionário que reúne os segredos mais valiosos já descobertos
              sobre mentalidade, hábitos e sucesso inevitável.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16 bg-zinc-900/50 p-8 rounded-lg border border-emerald-500/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-8 text-center">
              As Chaves Para Uma Vida Extraordinária: O Que Você Precisa Saber
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Brain,
                    title: "Mentalidade de Crescimento",
                    description:
                      "Desenvolva uma mentalidade inquebrável que transforma desafios em oportunidades",
                  },
                  {
                    icon: Target,
                    title: "Disciplina Inabalável",
                    description:
                      "Transforme hábitos comuns em rituais poderosos para o sucesso",
                  },
                  {
                    icon: Rocket,
                    title: "Propósito Claro",
                    description:
                      "Descubra sua verdadeira missão e nunca mais se sinta perdido",
                  },
                  {
                    icon: Coins,
                    title: "Riqueza Interior e Exterior",
                    description:
                      "Domine os princípios universais da prosperidade e abundância",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-shadow">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-300 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Autoconfiança Inabalável",
                    description:
                      "Acredite no seu potencial e elimine o medo de falhar",
                  },
                  {
                    icon: Clock,
                    title: "Gestão do Tempo e Alta Performance",
                    description:
                      "Domine sua rotina e alcance mais em menos tempo",
                  },
                  {
                    icon: Zap,
                    title: "Resiliência e Superação",
                    description:
                      "Supere qualquer obstáculo com estratégias comprovadas",
                  },
                  {
                    icon: MessageCircle,
                    title: "Comunicação e Influência",
                    description:
                      "Aprenda a persuadir, negociar e se conectar com qualquer pessoa",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-shadow">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-300 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-8 text-center space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-lg text-emerald-300 italic mb-4">
                Está pronto para transformar sua vida? Descubra como dar o
                primeiro passo agora mesmo!
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-block group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-xl blur-md opacity-30 group-hover:opacity-70 transition-all duration-500" />
                <Button
                  className="relative w-full max-w-xs mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg py-5 rounded-lg shadow-xl group transition-all duration-300"
                  onClick={() =>
                    (window.location.href =
                      "https://pay.kirvano.com/1495deef-76af-4a03-a35a-45750c275b9a")
                  }
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2 text-xl">
                    QUERO COMEÇAR AGORA!
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Evidence & Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-8 text-center"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  value: 10000,
                  suffix: "+",
                  label: "Vidas Transformadas",
                  duration: 2000,
                },
                {
                  value: 97,
                  suffix: "%",
                  label: "Taxa de Satisfação",
                  duration: 1500,
                },
                {
                  value: 15,
                  suffix: "+ Anos",
                  label: "De Experiência",
                  duration: 1000,
                },
              ].map((stat, index) => {
                const { count, ref } = useCountAnimation(
                  stat.value,
                  stat.duration,
                );
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 p-[1px] transition-all duration-300 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600 group"
                  >
                    <div className="relative bg-zinc-900 p-6 rounded-lg h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-50 group-hover:animate-shimmer" />
                      <div className="relative text-center space-y-2">
                        <motion.div
                          ref={ref}
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.3 }}
                          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                        >
                          {count}
                          {stat.suffix}
                        </motion.div>
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.3 + 0.2 }}
                          className="text-zinc-300 font-medium"
                        >
                          {stat.label}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-amber-200 italic mb-4">
                "Este método é baseado em anos de pesquisa em neurociência e
                psicologia do sucesso, combinando as práticas mais eficazes
                usadas por líderes mundiais."
              </p>
              <p className="text-lg text-zinc-400">
                Agora é sua vez de acessar esse conhecimento e começar sua
                transformação
                <span className="text-amber-400 font-semibold">
                  {" "}
                  imediatamente
                </span>
                .
              </p>
            </div>

            <div className="flex justify-center">
              <ChevronDown className="w-6 h-6 text-amber-400 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
