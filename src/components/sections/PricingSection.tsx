import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Star, Clock, CheckCircle, ArrowRight } from "lucide-react";

interface PricingOption {
  title: string;
  price: string;
  originalPrice: string;
  features: string[];
  recommended?: boolean;
}

interface Props {
  options?: PricingOption[];
}

const defaultOptions: PricingOption[] = [
  {
    title: "Oferta Especial",
    price: "12x R$ 9,94",
    originalPrice: "R$ 297",
    features: [
      "Acesso vitalício ao conteúdo",
      "Garantia de 7 dias",
      "Bônus exclusivos",
      "Suporte por email",
      "Direito A futuras Atualizações Gratuito!",
    ],
    recommended: true,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing-section"
      className="bg-black py-8 md:py-10 flex flex-col relative"
      data-apollo-section="pricing"
    >
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <motion.img
            src="/mestres-mockup.png"
            alt="Mestre do Desenvolvimento"
            className="w-full max-w-xl h-auto object-contain drop-shadow-xl rounded-xl"
            style={{ maxHeight: 260 }}
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 1],
              filter: [
                "brightness(0.95)",
                "brightness(1.05)",
                "brightness(0.95)",
              ],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
      <div className="container mx-auto px-4 flex justify-center items-center image">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Invista no Seu Futuro
          </h2>

          <motion.div
            className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 rounded-lg border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Oferta Especial
              </span>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-zinc-400 text-lg line-through">
                    De R$ 297
                  </p>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    12x de R$ 9,94
                  </div>
                  <p className="text-emerald-400 font-medium">
                    ou R$ 97,00 à vista
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Acesso vitalício ao conteúdo",
                    "Garantia de 7 dias",
                    "Bônus exclusivos",
                    "Suporte por email",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-zinc-300"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 p-[1px] transition-all duration-300 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600">
                  <div className="relative bg-zinc-900 px-6 py-4 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-50 animate-shimmer" />
                    <div className="relative space-y-4">
                      <h3 className="text-lg font-semibold text-emerald-400">
                        O que você vai receber:
                      </h3>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        <li>✓ Acesso completo ao método</li>
                        <li>✓ Suporte por email</li>
                        <li>✓ Material complementar</li>
                        <li>✓ Direito A futuras Atualizações Gratuito!</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-2 text-emerald-300 mb-4">
                    <Shield className="w-5 h-5" />
                    <p>7 dias de garantia incondicional</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-all duration-300" />
                    <Button
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
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                      <span className="relative flex items-center justify-center gap-2">
                        Eu Quero Ser Mestre
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
