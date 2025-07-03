import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  endDate?: Date;
  onComplete?: () => void;
  initialMinutes?: number;
  initialSeconds?: number;
}

export default function CountdownTimer({
  endDate,
  onComplete = () => {},
  initialMinutes = 0,
  initialSeconds = 0,
}: CountdownTimerProps) {
  // Se endDate não for fornecido, usar minutos/segundos iniciais
  const [targetDate] = React.useState(
    endDate || new Date(Date.now() + (initialMinutes * 60 + initialSeconds) * 1000)
  );

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - Date.now();
    if (difference <= 0) {
      onComplete();
      return { expired: true };
    }
    return {
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <div className="bg-red-900 p-4 rounded-lg shadow-lg text-center">
        <span className="text-amber-400 text-xl font-bold">Que pena! Você acabou de perder um Bônus Especial</span>
      </div>
    );
  }

  const { expired, ...units } = timeLeft;

  return (
    <div className="bg-zinc-900 p-2 rounded-lg shadow-lg mb-2">
      <div className="flex justify-center items-center gap-2">
        {Object.entries(units).map(([unit, value]) => (
          <motion.div
            key={unit}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              key={String(value)}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-gradient-to-b from-amber-500 to-amber-600 text-black font-bold text-xl w-10 h-10 rounded-lg flex items-center justify-center"
            >
              {String(value).padStart(2, "0")}
            </motion.div>
            <span className="text-amber-400 text-xs mt-1 capitalize">
              {unit}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
