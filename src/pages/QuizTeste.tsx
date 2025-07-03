import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from '../components/CountdownTimer';

const questions = [
  // Qualificação e conversão
  {
    question: "Qual seu maior objetivo para os próximos meses?",
    options: [
      "Liberdade financeira",
      "Autoconfiança",
      "Alta performance",
      "Mudança de carreira",
      "Outro"
    ],
    type: "qualify"
  },
  {
    question: "O que mais te impede de avançar hoje?",
    options: [
      "Falta de foco",
      "Procrastinação",
      "Medo/insegurança",
      "Falta de método",
      "Outro"
    ],
    type: "qualify"
  },
  // Scorecard
  {
    question: "Você tem clareza sobre seus objetivos?",
    options: ["Nenhuma", "Pouca", "Razoável", "Boa", "Total"],
  },
  {
    question: "Com que frequência você procrastina tarefas importantes?",
    options: ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca"],
  },
  {
    question: "Você controla suas emoções em situações difíceis?",
    options: ["Nunca", "Raramente", "Às vezes", "Quase sempre", "Sempre"],
  },
  {
    question: "Você investe em autodesenvolvimento?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
  },
  {
    question: "Você mantém hábitos positivos com disciplina?",
    options: ["Nenhuma", "Pouca", "Razoável", "Boa", "Total"],
  },
  // Pergunta final matadora
  {
    question: "Se tivesse acesso a um método comprovado, você daria o próximo passo para transformar sua vida?",
    options: [
      "Sim, quero evoluir!",
      "Tenho interesse, mas tenho dúvidas",
      "Preciso pensar mais",
      "Não estou pronto(a) ainda",
      "Prefiro continuar como estou"
    ],
    type: "final"
  },
];

const maxScore = 6 * 5; // Scorecard só das perguntas de score

function getLevel(score) {
  if (score <= maxScore * 0.4) return {
    label: "Nível Baixo",
    feedback: "Você está no início da jornada, mas só de estar aqui já mostra coragem! O próximo passo é buscar orientação e ação. O Mestres do Desenvolvimento pode ser o divisor de águas para você." };
  if (score <= maxScore * 0.7) return {
    label: "Nível Médio",
    feedback: "Você tem grande potencial, mas está travado por crenças ou falta de disciplina. Com as estratégias certas, pode desbloquear resultados incríveis. Não pare agora!" };
  return {
    label: "Nível Alto",
    feedback: "Você já está em alto nível! Com técnica e consistência, pode atingir resultados extraordinários. O próximo passo é acelerar sua evolução com mentoria e networking!" };
}

function getRecommendation(qualifyAnswers, finalAnswer) {
  if (finalAnswer === 0) return "Você está pronto(a) para dar o próximo passo! Clique abaixo para garantir sua aula gratuita e um bônus exclusivo.";
  if (qualifyAnswers.includes(0)) return "Seu foco em liberdade financeira é o primeiro passo. O método Mestres do Desenvolvimento pode te ajudar a chegar lá.";
  if (qualifyAnswers.includes(1)) return "Desenvolver autoconfiança é essencial. Nossa comunidade e técnicas vão te impulsionar!";
  if (qualifyAnswers.includes(2)) return "Alta performance é questão de método. Descubra como criar hábitos de alta performance!";
  if (qualifyAnswers.includes(3)) return "Mudança de carreira exige mentalidade e estratégia. Você está no lugar certo!";
  return "Seu potencial é enorme. Não deixe para depois: aproveite a oportunidade de evoluir agora!";
}

const fadeInScroll = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -32, transition: { duration: 0.3, ease: 'easeIn' } }
};

export default function Quizz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [qualifyAnswers, setQualifyAnswers] = useState([]);
  const [finalAnswer, setFinalAnswer] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [startTime, setStartTime] = useState(null);

  React.useEffect(() => {
    setTimeout(() => setShowQuiz(true), 200);
  }, []);

  React.useEffect(() => {
    if (showQuiz && startTime === null) {
      setStartTime(Date.now());
      window.gtag && window.gtag('event', 'quiz_start');
    }
  }, [showQuiz, startTime]);

  React.useEffect(() => {
    if (current > 0 && current < questions.length && showQuiz) {
      window.gtag && window.gtag('event', 'quiz_step', {
        step: current + 1,
        question: questions[current].question
      });
    }
  }, [current, showQuiz]);

  React.useEffect(() => {
    if (finished && startTime) {
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      window.gtag && window.gtag('event', 'quiz_complete', { elapsed_time: elapsed });
    }
  }, [finished, startTime]);

  const handleOption = (idx) => {
    const q = questions[current];
    if (q.type === "qualify") {
      setQualifyAnswers([...qualifyAnswers, idx]);
    } else if (q.type === "final") {
      setFinalAnswer(idx);
    } else {
      setScore(score + (idx + 1) * 10 / 5);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const progress = Math.round(((current) / questions.length) * 100);
  const userScore = Math.round(score * (100 / maxScore));

  function handleEmailSubmit(e) {
    e.preventDefault();
    setEmailError("");
    setEmailSuccess(false);

    // Validação simples de e-mail
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setEmailError("Digite um e-mail válido.");
      return;
    }
    setEmailSuccess(true);

    fetch('https://sheetdb.io/api/v1/y50x5hxdn5j5d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [{ email, data: new Date().toISOString() }] }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.created) {
          setTimeout(() => {
            setShowPopup(false);
            setEmail("");
            setEmailSuccess(false);
            window.location.href = "/";
          }, 1200);
        } else {
          setEmailError("Erro ao enviar. Tente novamente.");
          setEmailSuccess(false);
        }
      })
      .catch(() => {
        setEmailError("Erro ao enviar. Tente novamente.");
        setEmailSuccess(false);
      });
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ width: '100%', maxWidth: 440, background: '#18181b', borderRadius: 18, boxShadow: '0 0 32px #10b98122', padding: 28, color: '#fff', border: '1px solid #10b98155', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {!showQuiz ? (
            <motion.div key="fadein" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} style={{ minHeight: 200 }} />
          ) : !finished ? (
            <motion.div
              key={current}
              variants={fadeInScroll}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div style={{ textAlign: 'center', marginBottom: 18 }}>
                <div style={{ fontSize: 22, fontWeight: 700, background: 'linear-gradient(90deg,#34d399,#14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Em menos de 3 minutos, descubra seu score de mentalidade vencedora!
                </div>
                <div style={{ color: '#a3a3a3', fontSize: 15, marginTop: 6 }}>
                  Este é um teste profissional que vai revelar em qual nível você está e o que está te travando.
                </div>
              </div>
              <div style={{ height: 8, width: '100%', background: '#27272a', borderRadius: 8, marginBottom: 18, overflow: 'hidden' }}>
                <motion.div style={{ height: 8, borderRadius: 8, background: 'linear-gradient(90deg,#34d399,#14b8a6)' }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: 'easeInOut' }} />
              </div>
              <div style={{ color: '#34d399', fontWeight: 600, fontSize: 17, marginBottom: 18, textAlign: 'center' }}>{questions[current].question}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {questions[current].options.map((opt, idx) => (
                  <motion.button
                    key={idx}
                    variants={fadeInScroll}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      width: '100%',
                      padding: 14,
                      fontSize: 16,
                      fontWeight: 500,
                      background: 'linear-gradient(90deg,#10b981,#14b8a6)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      boxShadow: '0 2px 8px #10b98122',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onClick={() => handleOption(idx)}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
              <div style={{ marginTop: 18, color: '#a3a3a3', fontSize: 13, textAlign: 'right' }}>
                Pergunta {current + 1} de {questions.length}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#34d399,#14b8a6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8,
                  }}
                >
                  <svg width="38" height="38" fill="none" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#fff" fillOpacity="0.15"/><path d="M12 20.5l5 5 9-11" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.div>
                <div style={{ fontSize: 26, fontWeight: 700, background: 'linear-gradient(90deg,#34d399,#14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>
                  Parabéns! Teste concluído
                </div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#34d399', marginBottom: 8 }}>
                Seu Score: {userScore} / 100
              </div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#34d399', marginBottom: 12 }}>
                {getLevel(score).label}
              </div>
              <div style={{ color: '#a3a3a3', fontSize: 16, marginBottom: 18 }}>
                {getLevel(score).feedback}
              </div>
              <div style={{ color: '#fff', fontSize: 17, fontWeight: 500, marginBottom: 10 }}>
                {getRecommendation(qualifyAnswers, finalAnswer)}
              </div>
              <div style={{ color: '#34d399', fontSize: 15, marginBottom: 18, fontWeight: 500 }}>
                Aula 100% gratuita e bônus exclusivo garantido ao assistir a Aula até o final
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18, alignItems: 'center' }}>
                <button
                  style={{
                    width: '100%',
                    padding: 14,
                    fontSize: 16,
                    fontWeight: 700,
                    background: 'linear-gradient(90deg,#10b981,#14b8a6)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px #10b98122',
                    cursor: 'pointer',
                    marginBottom: 8,
                  }}
                  onClick={() => setShowPopup(true)}
                >
                  Acessar aula exclusiva gratuita
                </button>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'none',
                    border: 'none',
                    color: '#a3a3a3',
                    fontSize: 16,
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setCurrent(0);
                    setScore(0);
                    setFinished(false);
                    setQualifyAnswers([]);
                    setFinalAnswer(null);
                  }}
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 2v2M11 18v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M2 11h2M18 11h2M4.22 17.78l1.42-1.42M16.36 5.64l1.42-1.42M7 11a4 4 0 108 0 4 4 0 00-8 0z" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Refazer teste
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* POPUP DE EMAIL */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              key="popup"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(16,24,32,0.85)',
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#18181b',
                  borderRadius: 18,
                  boxShadow: '0 0 32px #10b98144',
                  padding: 32,
                  maxWidth: 380,
                  width: '90vw',
                  color: '#fff',
                  border: '1px solid #10b98155',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <button
                  onClick={() => setShowPopup(false)}
                  style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: '#a3a3a3', fontSize: 22, cursor: 'pointer' }}
                  aria-label="Fechar"
                >×</button>
                <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, background: 'linear-gradient(90deg,#fbbf24,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  ⚠️ Seu Score: {userScore} / 100 → Nível {getLevel(score).label}
                </div>
                <div style={{ color: '#fff', fontSize: 16, marginBottom: 10, fontWeight: 600 }}>
                  Você está a 1 passo de desbloquear seu potencial e subir do nível {getLevel(score).label}. Aula + bônus exclusivo só hoje!
                </div>
                <div style={{ color: '#fbbf24', fontSize: 15, marginBottom: 10, fontWeight: 700 }}>
                  ⚠️ Atenção: Aula e bônus disponíveis somente HOJE para quem completou o quiz.
                </div>
                <CountdownTimer initialMinutes={15} initialSeconds={0} />
                <ul style={{ textAlign: 'left', color: '#34d399', fontSize: 15, margin: '16px 0 18px 0', padding: 0, listStyle: 'none' }}>
                  <li style={{ marginBottom: 4 }}>✅ Acesso imediato à aula</li>
                  <li style={{ marginBottom: 4 }}>✅ Bônus exclusivo para quem fez o quiz</li>
                  <li>✅ Checklist com 5 passos para desbloquear seu potencial ainda hoje</li>
                </ul>
                <form onSubmit={handleEmailSubmit} style={{ marginBottom: 10 }}>
                  <input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: 12,
                      borderRadius: 8,
                      border: '1.5px solid #34d399',
                      fontSize: 16,
                      marginBottom: 10,
                      outline: 'none',
                      color: '#222',
                    }}
                    disabled={emailSuccess}
                  />
                  {emailError && <div style={{ color: '#f87171', fontSize: 14, marginBottom: 8 }}>{emailError}</div>}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: 14,
                      fontSize: 16,
                      fontWeight: 700,
                      background: 'linear-gradient(90deg,#10b981,#14b8a6)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      boxShadow: '0 2px 8px #10b98122',
                      cursor: 'pointer',
                      marginTop: 4,
                    }}
                    disabled={emailSuccess}
                  >
                    {emailSuccess ? "Enviando..." : "Sim, quero desbloquear meu potencial AGORA!"}
                  </button>
                </form>
                <div style={{ color: '#a3a3a3', fontSize: 13, marginTop: 8 }}>
                  Seu e-mail está 100% seguro. Nada de spam.
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 