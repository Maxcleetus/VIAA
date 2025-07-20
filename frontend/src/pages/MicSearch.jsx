import React, { useState, useRef } from "react";
import { Mic } from "lucide-react";

const MicSearch = () => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const micSound = useRef(null);

  const handleMicClick = () => {
    if (micSound.current) {
      micSound.current.currentTime = 0;
      micSound.current.play();
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <div className="flex  items-center justify-center  ">
      {/* Mic Sound */}
      <audio ref={micSound} src="/sounds/mic-beep.mp3" preload="auto" />

      {/* Mic Button */}
      <button
        onClick={handleMicClick}
        className={`p-2 rounded-full shadow-lg transition-all ${
          listening ? "bg-red-500 text-white" : "bg-blue-600 text-white"
        }`}
      >
        <Mic size={20} />
      </button>

      {/* Output */}
      
    </div>
  );
};

export default MicSearch;
