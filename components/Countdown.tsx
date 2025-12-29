
import React, { useState, useEffect } from 'react';
import { REUNION_DATE } from '../constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = REUNION_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center py-6">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Sec', value: timeLeft.seconds },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center bg-white/80 backdrop-blur shadow-sm p-4 rounded-2xl border border-white min-w-[80px]">
          <span className="text-3xl font-bold text-indigo-900 leading-none">{unit.value.toString().padStart(2, '0')}</span>
          <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mt-1">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
