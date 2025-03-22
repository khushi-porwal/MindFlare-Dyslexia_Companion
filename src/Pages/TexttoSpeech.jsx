"use client";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Volume2 } from "lucide-react";

export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSupported("speechSynthesis" in window);
    }
  }, []);

  const handleSpeak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      toast.error("Text-to-speech is not supported in this browser.");
      return;
    }

    if (text.trim() === "") {
      toast.error("Please enter some text to speak!");
      return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-4">
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />

      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Text to Speech</h1>

        {!isSupported && (
          <p className="text-red-400 text-sm mb-2">
            Your browser does not support text-to-speech.
          </p>
        )}

        <input
          type="text"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSpeak}
          className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 active:scale-95 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          disabled={!isSupported}
        >
          <Volume2 size={20} /> Speak
        </button>
      </div>
    </div>
  );
}
