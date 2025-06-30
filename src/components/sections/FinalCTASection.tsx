import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Timer } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section
      className="bg-black text-white py-8 md:py-10 relative"
      id="agreement-section"
      data-apollo-section="agreement"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full mb-8">
            <Timer className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">
              Oferta por tempo limitado!
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent"
          >
            Não Perca Esta Oportunidade Única
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-300 mb-8"
          >
            Junte-se aos milhares de alunos que já transformaram suas vidas.
            <br />
            <span className="text-amber-400 font-semibold">
              Esta oferta não estará disponível para sempre!
            </span>
          </motion.p>

          {/* Seção Para quem NÃO é */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900/80 border border-red-600 rounded-xl p-8 mb-10 text-left max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">Este método NÃO é para você se...</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Procura resultados sem esforço ou fórmulas mágicas</li>
              <li>Não está disposto a mudar hábitos e mentalidade</li>
              <li>Prefere reclamar a agir</li>
              <li>Não valoriza investir em si mesmo</li>
              <li>Busca atalhos e não quer se comprometer com o processo</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <Button
              size="lg"
              className="relative w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg py-6 rounded-lg shadow-xl group transition-all duration-300"
              onClick={() => {
                // Facebook Pixel InitiateCheckout
                try {
                  if (window.fbq) {
                    window.fbq('track', 'InitiateCheckout');
                  }
                } catch (e) { /* ignore */ }
                window.location.href = "https://pay.kirvano.com/1495deef-76af-4a03-a35a-45750c275b9a";
              }}
            >
              QUERO COMEÇAR AGORA!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-zinc-400 text-sm">
              Garantia incondicional de 7 dias ou seu dinheiro de volta
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
