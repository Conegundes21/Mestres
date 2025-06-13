import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  endDate?: Date;
  onComplete?: () => void;
}

export default function CountdownTimer({
  endDate = new Date(Date.now() + 24 * 60 * 60 * 1000), // Default 24 hours from now
  onComplete = () => {},
}: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = endDate.getTime() - Date.now();

    if (difference <= 0) {
      onComplete();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="bg-zinc-900 p-4 rounded-lg shadow-lg">
      <div className="flex justify-center items-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              key={value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-gradient-to-b from-amber-500 to-amber-600 text-black font-bold text-2xl w-16 h-16 rounded-lg flex items-center justify-center"
            >
              {String(value).padStart(2, "0")}
            </motion.div>
            <span className="text-amber-400 text-sm mt-1 capitalize">
              {unit}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
