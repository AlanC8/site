"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 40,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let i = -1;
    setDisplayedText("");

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, duration]);

  return (
    <h1
      className={`font-display text-center text-md font-bold tracking-[-0.02em] drop-shadow-sm ${className}`}
    >
      {displayedText}
    </h1>
  );
}
