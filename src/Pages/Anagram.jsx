"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const done = "https://i.pinimg.com/736x/d9/96/8e/d9968eba01a9c61318cc8aef32695902.jpg";
const oops = "https://i.pinimg.com/736x/a3/dd/c4/a3ddc47acfdffa977ae812cda60d8ae5.jpg";
const selectSound = "https://example.com/select.mp3"; // Replace with actual sound file
const correctSound = "https://example.com/correct.mp3"; // Replace with actual sound file
const wrongSound = "https://example.com/wrong.mp3"; // Replace with actual sound file

const words = ["pirates", "strap", "spark", "parts", "stair"];

export default function AnagramGame() {
  const [currentWord, setCurrentWord] = useState("");
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [feedbackImage, setFeedbackImage] = useState(null);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const startNewGame = useCallback(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setShuffledLetters(shuffleArray(word.split("")));
    setSelectedLetters([]);
    setMessage(`Spell the word: ${word}`);
    setFeedbackImage(null);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const handleLetterClick = (letter) => {
    playSound(selectSound);
    setSelectedLetters((prev) => {
      const newSelection = [...prev, letter];
      const formedWord = newSelection.join("");

      if (formedWord === currentWord) {
        setMessage("🎉 Great job! Starting a new word...");
        setFeedbackImage(done);
        playSound(correctSound);
        setTimeout(startNewGame, 2000);
      } else if (!currentWord.startsWith(formedWord)) {
        setMessage("❌ Oops! That doesn't look right. Try again.");
        setFeedbackImage(oops);
        playSound(wrongSound);
        return [];
      }
      return newSelection;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-400 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <div className="flex flex-col items-center mb-4">
          {feedbackImage && (
            <motion.img
              src={feedbackImage}
              alt="Feedback"
              className="w-24 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => playSound(feedbackImage === done ? correctSound : wrongSound)}
            />
          )}
          <motion.p
            className="text-xl font-semibold text-brown-700 mt-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.p>
        </div>

        <div className="relative w-48 h-48 bg-white rounded-full shadow-md flex justify-center items-center mb-6 mx-auto">
          {shuffledLetters.map((letter, index) => (
            <button
              key={index}
              onClick={() => handleLetterClick(letter)}
              className="absolute w-12 h-12 bg-yellow-500 text-white font-bold rounded-full flex justify-center items-center shadow-md"
              style={{
                top: `${50 + 40 * Math.sin((2 * Math.PI * index) / shuffledLetters.length)}%`,
                left: `${50 + 40 * Math.cos((2 * Math.PI * index) / shuffledLetters.length)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {letter}
            </button>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {selectedLetters.map((letter, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-yellow-200 rounded-lg text-lg font-bold text-brown-700 shadow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          onClick={startNewGame}
          className="px-6 py-3 bg-yellow-600 text-white text-lg rounded-lg shadow-md hover:bg-yellow-700 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          New Word
        </motion.button>
      </div>
    </div>
  );
}
