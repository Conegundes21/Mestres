import { motion } from "framer-motion";

export default function InvestmentSection() {
  return (
    <section className="bg-gradient-to-b from-zinc-900/90 to-black py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900/90 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-4xl mx-auto mb-8"
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 p-[1px] transition-all duration-300 group">
              <div className="relative bg-zinc-900 rounded-lg overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-50 group-hover:animate-shimmer" />
                <img
                  src="/fire-removebg-preview (1).png"
                  alt="Mestres do Desenvolvimento - Ebook, Desktop e Mobile"
                  className="w-full h-auto object-contain max-w-3xl mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
