import React from "react";

const GameStatus = ({ wrongGuesses, maxWrongGuesses }) => {
  return (
    <div>
      <p>
        Ошибки: {wrongGuesses} / {maxWrongGuesses}
      </p>
    </div>
  );
};

export default GameStatus;
