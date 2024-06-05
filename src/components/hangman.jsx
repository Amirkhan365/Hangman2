import React, { useState } from "react";
import Word from "./word";
import Letters from "./letters";
import GameStatus from "./status-game";
import "./hangman.css";

const words = ["javascript", "react", "hangman", "coding"];

const Hangman = () => {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const maxWrongGuesses = 6;

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);

      if (!word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  const isGameOver = wrongGuesses >= maxWrongGuesses;
  const isGameWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const renderHangman = () => {
    const hangmanParts = [
      "O", // если что это голова
      "|", // тело
      "/", // Левая рука
      "\\", // Правая рука
      "/", // Левая нога
      "\\", // Правая нога
    ];

    return (
      <div className="hangman">
        {hangmanParts.map((part, index) => (
          <div
            key={index}
            className={`part part-${index} ${
              wrongGuesses > index ? "hidden" : ""
            }`}
          >
            {part}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Виселица</h1>
      <GameStatus
        wrongGuesses={wrongGuesses}
        maxWrongGuesses={maxWrongGuesses}
      />
      {renderHangman()}
      <Word word={word} guessedLetters={guessedLetters} />
      <Letters
        handleGuess={handleGuess}
        guessedLetters={guessedLetters}
        disabled={isGameOver || isGameWon}
      />
      {isGameOver && <p>Вы проиграли! Слово было: {word}</p>}
      {isGameWon && <p>Поздравляем! Вы выиграли!</p>}
    </div>
  );
};

export default Hangman;
