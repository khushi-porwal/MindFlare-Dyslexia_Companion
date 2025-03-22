"use client";
import React, { useState } from "react";

const wordsList = [
  { scrambled: "ltebat", correct: "tablet", image: "https://th.bing.com/th/id/OIP.yMwBzPZYU2G0rAdrr8D2ogHaHD?rs=1&pid=ImgDetMain" },
  { scrambled: "ract", correct: "cart", image: "https://i.pinimg.com/originals/8a/81/f4/8a81f4869b242074c396dddbb7ad67bb.jpg" },
  { scrambled: "osueh", correct: "house", image: "https://th.bing.com/th/id/OIP.jvaxavmxg_a-5bRe8HKGWAHaFY?rs=1&pid=ImgDetMain" },
  { scrambled: "ipano", correct: "piano", image: "https://th.bing.com/th/id/OIP.xzS4slVxemUHEagYK_BjsAHaF7?rs=1&pid=ImgDetMain" },
  { scrambled: "klcoc", correct: "clock", image: "https://th.bing.com/th/id/R.81e2020a553aae6a8e6aa6dee5394227?rik=IfqQDKtYmKaIoQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fclock-clipart-png--1746.png&ehk=JigoC%2f5cvY%2bmkp7ASqyZrC7B6KZV4FIgtHgAVs21rzo%3d&risl=&pid=ImgRaw&r=0" }
];

const Scramble = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState(Array(wordsList[0].scrambled.length).fill(""));
  const [score, setScore] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptMessage, setPromptMessage] = useState("");

  const handleLetterChange = (index, event) => {
    const newInput = [...userInput];
    newInput[index] = event.target.value;
    setUserInput(newInput);

    // Move focus to next input if a letter is entered
    if (event.target.value !== "" && index < wordsList[currentWordIndex].scrambled.length - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = () => {
    const currentWord = wordsList[currentWordIndex];
    const formedWord = userInput.join("");

    if (formedWord.toLowerCase() === currentWord.correct.toLowerCase()) {
      setScore(score + 1);
      setPromptMessage("🎉 Good Job! You got it right!");
      setShowPrompt(true);
      setUserInput(Array(currentWord.scrambled.length).fill(""));

      setTimeout(() => {
        if (currentWordIndex < wordsList.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
          setUserInput(Array(wordsList[currentWordIndex + 1].scrambled.length).fill(""));
          setShowPrompt(false);
        } else {
          setPromptMessage("🎊 Yay! You've finished the game. Well done!");
          setShowPrompt(true);
        }
      }, 1000);
    } else {
      setPromptMessage("❌ Oops! Try again, you can do it!");
      setShowPrompt(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-red-500 to-white font-poppins">
      <h1 className="text-4xl font-semibold text-black shadow-md animate-slideIn">Welcome to Scramble</h1>
      <div className="text-center my-5 animate-fadeIn">
        <h2 className="text-2xl font-bold">Unscramble the word!</h2>
        <div className="flex items-center justify-center bg-white p-5 rounded-xl shadow-md my-3 animate-bounceIn">
          <img src={wordsList[currentWordIndex].image} alt="icon" className="w-16 h-16 rounded-full shadow-md animate-rotate" />
          <p className="text-3xl text-blue-500 font-bold ml-4">{wordsList[currentWordIndex].scrambled}</p>
        </div>
      </div>

      <div className="flex justify-center gap-3 my-4">
        {wordsList[currentWordIndex].scrambled.split('').map((_, index) => (
          <input
            key={index}
            id={`input-${index}`}
            type="text"
            value={userInput[index]}
            onChange={(e) => handleLetterChange(index, e)}
            maxLength={1}
            className="w-12 h-12 text-center text-2xl font-bold bg-black text-white rounded-lg shadow-md focus:border-b-4 focus:border-red-400"
          />
        ))}
      </div>

      <button 
        onClick={handleSubmit} 
        className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-green-600 transition-transform transform hover:scale-105 animate-bounce"
      >
        Submit
      </button>

      {showPrompt && (
        <p className="bg-red-500 text-white px-5 py-2 rounded-lg mt-4 text-lg shadow-md animate-bounceIn">
          {promptMessage}
        </p>
      )}

      <p className="text-2xl font-bold mt-5">Score: {score}</p>
    </div>
  );
};

export default Scramble;
