import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

const questions = [
  {
    question: "Você sente que tem clareza sobre seus objetivos?",
    options: [
      { text: "Nenhuma", score: 1 },
      { text: "Pouca", score: 2 },
      { text: "Razoável", score: 3 },
      { text: "Boa", score: 4 },
      { text: "Total", score: 5 },
    ],
  },
  {
    question: "Com que frequência você procrastina tarefas importantes?",
    options: [
      { text: "Sempre", score: 1 },
      { text: "Frequentemente", score: 2 },
      { text: "Às vezes", score: 3 },
      { text: "Raramente", score: 4 },
      { text: "Nunca", score: 5 },
    ],
  },
  {
    question: "Você sente que controla suas emoções em situações difíceis?",
    options: [
      { text: "Nunca", score: 1 },
      { text: "Raramente", score: 2 },
      { text: "Às vezes", score: 3 },
      { text: "Quase sempre", score: 4 },
      { text: "Sempre", score: 5 },
    ],
  },
  {
    question: "Com que frequência você investe em autodesenvolvimento?",
    options: [
      { text: "Nunca", score: 1 },
      { text: "Raramente", score: 2 },
      { text: "Às vezes", score: 3 },
      { text: "Frequentemente", score: 4 },
      { text: "Sempre", score: 5 },
    ],
  },
  {
    question: "Você sente que tem disciplina para manter hábitos positivos?",
    options: [
      { text: "Nenhuma", score: 1 },
      { text: "Pouca", score: 2 },
      { text: "Razoável", score: 3 },
      { text: "Boa", score: 4 },
      { text: "Total", score: 5 },
    ],
  },
  {
    question: "Você costuma definir metas claras e acompanhar seu progresso?",
    options: [
      { text: "Nunca", score: 1 },
      { text: "Raramente", score: 2 },
      { text: "Às vezes", score: 3 },
      { text: "Frequentemente", score: 4 },
      { text: "Sempre", score: 5 },
    ],
  },
  {
    question: "Como você reage diante de fracassos ou erros?",
    options: [
      { text: "Desisto", score: 1 },
      { text: "Me desanimo", score: 2 },
      { text: "Reflito e tento de novo", score: 3 },
      { text: "Aprendo e sigo em frente", score: 4 },
      { text: "Uso como combustível", score: 5 },
    ],
  },
  {
    question: "Você sente que tem equilíbrio entre vida pessoal e profissional?",
    options: [
      { text: "Nenhum", score: 1 },
      { text: "Pouco", score: 2 },
      { text: "Razoável", score: 3 },
      { text: "Bom", score: 4 },
      { text: "Total", score: 5 },
    ],
  },
];

const maxScore = questions.length * 5;

function getLevel(score: number) {
  if (score <= maxScore * 0.4) {
    return {
      label: "Nível Baixo",
      feedback:
        "Você precisa urgente de ajuda. Seu potencial está bloqueado, mas com orientação certa pode evoluir rapidamente! O Mestres do Desenvolvimento foi criado para te destravar." ,
    };
  }
  if (score <= maxScore * 0.7) {
    return {
      label: "Nível Médio",
      feedback:
        "Você tem potencial alto, mas está bloqueado por crenças ou falta de disciplina. Com as técnicas certas, pode alcançar o próximo nível!" ,
    };
  }
  return {
    label: "Nível Alto",
    feedback:
      "Você está muito próximo do seu máximo! Falta apenas técnica e consistência para atingir resultados extraordinários. Conte com o Mestres do Desenvolvimento para acelerar sua jornada!" ,
  };
}

export default function Quizzz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleOption = (optionScore: number) => {
    if (current < questions.length - 1) {
      setScore(score + optionScore);
      setCurrent(current + 1);
    } else {
      setScore(score + optionScore);
      setFinished(true);
    }
  };

  const progress = ((current) / questions.length) * 100;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center py-8 px-2">
      <Card className="w-full max-w-md mx-auto p-6 md:p-10 rounded-2xl shadow-2xl border border-emerald-500/20 bg-zinc-900 text-emerald-100">
        {!finished ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {current === 0 && (
              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  Em menos de 3 minutos, descubra seu score de mentalidade vencedora!
                </h2>
                <p className="text-zinc-300 text-sm md:text-base">
                  Este é um teste profissional que vai revelar em qual nível você está e o que está te travando.
                </p>
              </div>
            )}
            <Progress value={progress} className="mb-6 h-2 bg-zinc-800" />
            <div className="mb-4 text-zinc-400 text-xs text-right">
              {current + 1} de {questions.length}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-emerald-400 mb-6 text-center">
              {questions[current].question}
            </h3>
            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, idx) => (
                <Button
                  key={idx}
                  className="w-full py-4 text-base md:text-lg font-medium bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg shadow-md"
                  onClick={() => handleOption(opt.score)}
                >
                  {opt.text}
                </Button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              Seu Score é {score}/{maxScore}
            </h2>
            <div className="text-lg md:text-xl font-semibold text-emerald-400 mb-4">
              {getLevel(score).label}
            </div>
            <p className="text-zinc-300 mb-6">
              {getLevel(score).feedback}
            </p>
            <Button
              className="w-full py-4 text-base md:text-lg font-medium bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg shadow-md"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
              }}
            >
              Refazer teste
            </Button>
          </motion.div>
        )}
      </Card>
    </section>
  );
} 