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
            className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-center leading-tight"
          >
            <span className="text-red-500 drop-shadow-[0_2px_8px_rgba(239,68,68,0.7)]">Você foi programado pra falhar...</span> <span className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">Mas existe um protocolo mental que reverte <span className='text-red-500 font-black'>TUDO.</span></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg font-medium text-center mb-8 text-white"
          >
            Eles criaram um sistema pra manter você confuso, cansado e controlável. Mas existe uma brecha...
          </motion.p>

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
                    onClick={() => {
                      const section = document.getElementById('pricing-section');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
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
              </motion.div>
            </div>
          </motion.div>

          {/* Lead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto mb-16 text-center space-y-7"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent mb-4"
            >
              Você já sentiu que está vivendo uma vida que não te representa?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-zinc-200 font-medium"
            >
              Acorda com a sensação de que está ficando para trás, que tem algo dentro de você pedindo por mais, mas todo dia parece ser só mais do mesmo…
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-zinc-400"
            >
              E o pior: ninguém ao seu redor parece notar, <span className="block">Pessoas acomodadas, Conversas rasas, Sonhos enterrados pela rotina.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-amber-200 font-extrabold text-2xl md:text-3xl tracking-wide my-6"
            >
              Eu também vivi exatamente assim.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-lg md:text-xl text-zinc-200"
            >
              Trabalhava duro, Me dedicava, Estudava, Mas parecia que o mundo girava só pra alguns. Eu me sentia sufocado numa realidade onde ninguém falava sobre crescimento, mentalidade ou dinheiro.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-lg md:text-xl text-zinc-200"
            >
              Era como viver num deserto mental... Sem amigos ambiciosos, Sem referências de verdade. Cercado por pensamentos pequenos, conselhos baratos e um estilo de vida que me fazia pensar: <span className="italic text-zinc-400">“Será que é só isso?”</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="text-lg md:text-xl text-zinc-200"
            >
              Foi quando, sem perceber, comecei a observar os que estavam lá no topo: Empresários, milionários, líderes, mentes brilhantes…
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-lg md:text-xl text-emerald-300 italic"
            >
              E percebi algo que mudou tudo: Eles pensam diferente. Eles falam diferente. Eles vivem com um código que ninguém nos ensinou.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-lg md:text-xl text-zinc-400"
            >
              Enquanto a maioria busca por atalhos, eles seguem um caminho invisível, quase secreto.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="text-lg md:text-xl text-zinc-400"
            >
              Descobri padrões mentais, hábitos e princípios que ninguém me ensinou, mas que sempre estiveram ali: <span className="font-semibold text-emerald-200">escondidos entre os códigos de quem realmente vence.</span>
            </motion.p>
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
                  onClick={() => {
                    const section = document.getElementById('pricing-section');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
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
