"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const words = ["cat", "frog", "star", "moon", "light", "run", "play", "tree"];
const rhymes = {
  cat: ["hat", "bat", "rat", "mat"],
  frog: ["log", "dog", "bog", "clog"],
  star: ["car", "far", "bar", "guitar"],
  moon: ["spoon", "tune", "balloon", "soon"],
  light: ["bright", "fight", "sight", "night"],
  run: ["fun", "sun", "done", "bun"],
  play: ["day", "way", "say", "gray"],
  tree: ["bee", "see", "free", "glee"],
};

const imageUrls = {
  cat: "https://i.pinimg.com/736x/bd/36/0f/bd360fd2ae4fbe3ef98a6abfafb19fbb.jpg",
  frog: "https://i.pinimg.com/736x/61/c8/8c/61c88c2a90c64abdf181f9f34d564128.jpg",
  star: "https://i.pinimg.com/736x/63/27/55/6327556d99f161ed33f4180385e8ea8c.jpg",
  moon: "https://i.pinimg.com/736x/78/59/e3/7859e39f7635584462f210ba74a58bf3.jpg",
  light: "https://i.pinimg.com/736x/76/8f/cc/768fcc2025218a44a96ad1598dbd2dc1.jpg",
  run: "https://i.pinimg.com/736x/48/f5/12/48f5123917ffe14517d99809024826ce.jpg",
  play: "https://i.pinimg.com/736x/ad/dc/92/addc9272d7ba87939d4f7a0db64d3a9e.jpg",
  tree: "https://i.pinimg.com/736x/38/0e/c1/380ec17fdf582677307c38321ac17e4d.jpg",
  boy: "https://i.pinimg.com/736x/85/62/37/856237f5132178e5db73078ca8df31e1.jpg",
  girl: "https://i.pinimg.com/736x/53/3f/aa/533faa6584279a5fe5d0e330a41d2e5c.jpg",
};

export default function FrogRhymingGame() {
  const generateOptions = (word) => {
    const correctOption = rhymes[word][Math.floor(Math.random() * rhymes[word].length)];
    const incorrectOptions = words
      .filter((w) => w !== word)
      .map((w) => rhymes[w][Math.floor(Math.random() * rhymes[w].length)]);
    return [correctOption, ...incorrectOptions.slice(0, 2)].sort(() => Math.random() - 0.5);
  };

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [options, setOptions] = useState(generateOptions(words[0]));
  const [isCorrect, setIsCorrect] = useState(null);
  const [message, setMessage] = useState("");
  const [feedbackImage, setFeedbackImage] = useState(null);

  const handleOptionSelect = (selectedOption) => {
    if (rhymes[currentWord].includes(selectedOption)) {
      setIsCorrect(true);
      setMessage("Correct! Great job! 🐸");
      setFeedbackImage(imageUrls.girl);
      setTimeout(() => resetGame(), 1000);
    } else {
      setIsCorrect(false);
      setMessage("Oops! Try again.");
      setFeedbackImage(imageUrls.boy);
    }
  };

  const resetGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(newWord);
    setOptions(generateOptions(newWord));
    setIsCorrect(null);
    setMessage("");
    setFeedbackImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-green-500 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">🐸 Frog Rhyming Game 🐸</h1>
      <img src={imageUrls[currentWord]} alt={currentWord} className="w-32 h-32 mb-4" />
      <p className="text-xl font-semibold text-gray-800">Find a word that rhymes with:</p>
      <p className="text-2xl font-bold text-green-600">{currentWord}</p>

      <div className="flex gap-4 mt-4">
        {options.map((option, index) => (
          <motion.button
            key={index}
            className={`px-6 py-3 rounded-full text-white font-bold transition-transform transform hover:scale-110 ${
              isCorrect === null
                ? "bg-green-700"
                : rhymes[currentWord].includes(option)
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {message && (
        <p className={`mt-4 text-lg font-bold ${isCorrect ? "text-green-900" : "text-red-600"}`}>
          {message}
        </p>
      )}

      {feedbackImage && <img src={feedbackImage} alt="Feedback" className="w-24 h-24 mt-4" />}
    </div>
  );
}
