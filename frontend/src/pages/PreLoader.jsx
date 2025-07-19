import React, { useEffect, useState } from 'react';

const PreLoader = ({ onComplete }) => {
  const [stage, setStage] = useState("typing");
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const word = "Viiaa...";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < word.length) {
        setLetters((prev) => [...prev, word[index]]);
        index++;
      } else {
        clearInterval(typingInterval);
        setStage("pause");
        setTimeout(() => {
          setStage("exit");
          setTimeout(() => {
            setStage("done");
            if (onComplete) onComplete();
          }, 1000);
        }, 500);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-100 overflow-hidden">
      <h1
        className={`flex text-5xl font-extrabold text-blue-950 transition-all duration-700 ${
          stage === "exit" ? "translate-x-full opacity-0" : "translate-x-0"
        }`}
      >
        {letters.map((char, index) => (
          <span
            key={index}
            className="transition-opacity duration-300"
            style={{
              animation: 'fadeIn 0.4s ease-out',
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'forwards',
              opacity: 1,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default PreLoader;
