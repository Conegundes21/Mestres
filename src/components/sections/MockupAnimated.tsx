import { motion } from "framer-motion";

export default function MockupAnimated() {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-8">
      <div className="relative flex flex-col items-center justify-center w-full max-w-2xl">
        {/* Caixa */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="absolute left-0 bottom-0 w-24 h-32 bg-gray-900 rounded-lg shadow-lg border-4 border-yellow-400 flex items-center justify-center z-10 hidden sm:flex"
        >
          <img
            src="/logo-mestres.png"
            alt="Logo na Caixa"
            className="w-16 h-16 object-contain"
          />
        </motion.div>
        {/* Desktop */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="relative w-48 h-32 bg-gray-800 rounded-lg shadow-2xl border-4 border-yellow-400 flex items-center justify-center z-20"
        >
          <img
            src="/logo-mestres.png"
            alt="Logo no Desktop"
            className="w-28 h-20 object-contain"
          />
          {/* base do monitor */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-b-lg" />
        </motion.div>
        {/* Tablet */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="absolute right-0 bottom-0 w-16 h-24 bg-gray-900 rounded-xl shadow-lg border-4 border-yellow-400 flex items-center justify-center z-10 hidden sm:flex"
        >
          <img
            src="/logo-mestres.png"
            alt="Logo no Tablet"
            className="w-10 h-14 object-contain"
          />
        </motion.div>
        {/* Celular */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          className="absolute right-8 top-8 w-8 h-16 bg-gray-900 rounded-2xl shadow-md border-2 border-yellow-400 flex items-center justify-center z-30"
        >
          <img
            src="/logo-mestres.png"
            alt="Logo no Celular"
            className="w-6 h-10 object-contain"
          />
        </motion.div>
      </div>
      {/* Animação de flutuação */}
      <style>{`
        @media (max-width: 640px) {
          .sm\\:flex { display: none !important; }
        }
        .mockup-float {
          animation: floatY 3s ease-in-out infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
} 