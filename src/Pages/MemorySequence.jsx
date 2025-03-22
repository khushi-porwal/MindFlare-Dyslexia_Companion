"use client";
import React, { useState, useEffect } from "react";

const cardImages = ["🍎", "🍌", "🍒", "🍇", "🍉", "🥝", "🍍", "🍓"];

const generateCards = () => {
  return [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
};

const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (cards[first].emoji === cards[second].emoji) {
        setCards(prevCards => prevCards.map(card =>
          card.id === first || card.id === second ? { ...card, matched: true } : card
        ));
      } else {
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card =>
            card.id === first || card.id === second ? { ...card, flipped: false } : card
          ));
        }, 1000);
      }
      setSelected([]);
      setMoves(prevMoves => prevMoves + 1);
    }
  }, [selected, cards]);

  const handleCardClick = (id) => {
    if (selected.length < 2 && !cards[id].flipped && !cards[id].matched) {
      setCards(prevCards => prevCards.map(card =>
        card.id === id ? { ...card, flipped: true } : card
      ));
      setSelected([...selected, id]);
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setSelected([]);
    setMoves(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px", height: "100vh", width: "100vw", background: "#D5A3FF", color: "white", fontFamily: "monospace" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Memory Game</h1>
      <p style={{ fontSize: "18px" }}>Moves: {moves}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 80px)", gap: "10px", padding: "20px", background: "white", borderRadius: "15px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
        {cards.map(card => (
          <button
            key={card.id}
            style={{ width: "80px", height: "80px", fontSize: "24px", fontWeight: "bold", borderRadius: "10px", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", transition: "transform 0.3s", background: card.flipped || card.matched ? "white" : "#9b59b6", color: card.flipped || card.matched ? "black" : "white", transform: card.flipped || card.matched ? "scale(1.1)" : "scale(1)" }}
            onClick={() => handleCardClick(card.id)}
            disabled={card.flipped || card.matched}
          >
            {card.flipped || card.matched ? card.emoji : "❓"}
          </button>
        ))}
      </div>
      <button style={{ marginTop: "10px", padding: "10px 20px", background: "#2980b9", color: "white", fontSize: "16px", fontWeight: "bold", borderRadius: "10px", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", cursor: "pointer", transition: "background 0.3s" }} onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default MemoryGame;
