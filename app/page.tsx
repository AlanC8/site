"use client";
import { useState } from "react";
import DotPattern from "@/components/magicui/dot-pattern";
import TypingAnimation from "@/components/magicui/typing-animation";
import IntroScreen from "./componento/IntroScreen";
import axios from "axios";
import "./style/loader.css";

const HomePage = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getPrediction = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://kbtusite-back-production.up.railway.app/api/predict"
      );
      setPrediction(response.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white h-screen w-full flex flex-col items-center justify-center p-4">
      <IntroScreen />
      <h2 className="text-center mt-[-100px] text-4xl md:text-5xl font-extrabold text-black z-10 mb-4">
        Получите свое предсказание на будущее
      </h2>
      <h3 className="text-center text-base md:text-lg font-regular text-gray-700 z-10 mb-6 md:mb-8">
        Добро пожаловать в начало твоего пути. Узнай, что ждёт тебя в мире
        знаний и возможностей.
      </h3>

      {loading ? (
        <div className="loader z-10 mb-4"></div>
      ) : (
        <button
          onClick={getPrediction}
          className="px-4 py-2 md:px-6 md:py-3 bg-black text-white text-base md:text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out z-10"
        >
          Получить предсказание
        </button>
      )}

      <div className="mt-6 md:mt-8 w-full max-w-lg min-h-[100px] p-4 md:p-6 bg-opacity-90 text-center text-gray-800 z-10">
        {prediction ? (
          <TypingAnimation text={prediction} />
        ) : (
          <p className="text-gray-400">Ваше предсказание появится здесь...</p>
        )}
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-sm md:text-base text-gray-700 z-10">
        Поделись в сторис, отметив нас в Инстаграме{" "}
        <a
          className="underline font-bold"
          href="https://www.instagram.com/kbtu.site/"
        >
          @kbtu.site
        </a>
      </div>

      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <DotPattern />
      </div>
    </div>
  );
};

export default HomePage;
