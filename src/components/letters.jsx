import React from "react";

const Letters = ({ handleGuess, guessedLetters, disabled }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
