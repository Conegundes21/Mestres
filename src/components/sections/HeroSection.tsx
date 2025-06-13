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
  return (
    <section
      className="min-h-[80vh] md:min-h-screen bg-black text-white relative overflow-hidden"
      id="headline-section"
    >
      {/* Background gradient effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent" /> */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      <div className="container mx-auto px-4 pt-0 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent leading-tight"
          >
            A maioria das pessoas nunca descobre o segredo por trás da
            <br />
            verdadeira transformação...
            <span className="text-emerald-400">
              {" "}
              Mas você está prestes a descobrir!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-zinc-300 mb-8"
          >
            Descubra o método que já transformou a vida de mais de 10.000
            pessoas e comece sua jornada de transformação hoje mesmo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <CountdownTimer />
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#vsl-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold text-xl px-12 py-8 rounded-full group"
              >
                ASSISTIR AGORA
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-4 text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>7 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Acesso vitalício</span>
              </div>
            </motion.div>
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
  );
}
