"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import '../style/intro.css';

const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Через 3 секунды исчезает интро

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50 fade-out p-4">
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={900} // Уменьшил количество конфетти
        />
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/site.jpg"
              alt="University Logo"
              className="w-20 h-20 md:w-24 md:h-24 rounded"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 md:mb-4">
            Поздравляем с поступлением!
          </h2>
          <p className="text-base md:text-lg text-gray-800">
            Это первый шаг к вашему блестящему будущему. Мы рады видеть вас в нашем университете!
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6">
            Добро пожаловать в мир знаний и возможностей!
          </p>
        </div>
      </div>
    )
  );
};

export default IntroScreen;
