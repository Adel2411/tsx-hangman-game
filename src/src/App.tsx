import './App.css'
import {useCallback, useEffect, useState} from "react";
import wordList from "./wordList.json"
import {HangmanDraw} from "./Components/HangmanDraw.tsx";
import {HangmanWord} from "./Components/HangmanWord.tsx";
import {HangmanKeyboard} from "./Components/HangmanKeyboard.tsx";

function App() {
  // Generate a random word from wordList.json file :
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  });
  // Letters typed by the user :
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Incorrect letters types by the user :
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  // To know if the user wins or loses :
  const isLoser: boolean = incorrectLetters.length >= 6;
  const isWinner: boolean = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  // Handle Enter keypress to restart the game :
  useEffect(() => {
      const eventHandler = (e: KeyboardEvent) => {
          const key = e.key;
          // if the key pressed isn't "Enter" key, we don't do anything :
          if (k !== "Enter") return;

          e.preventDefault();
          addGuessedLetter(key);
      }

      document.addEventListener("keypress", eventHandler);

      return () => {
          document.removeEventListener("keypress", eventHandler);
      }
  }, []);


  // Function to add the pressed key in the guessedLetters array :
  const addGuessedLetter = useCallback((letter: string): void => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters]);     // the callBack of this function reload only if guessedLetters changes

  //Hand the keys pressed by the user :
  useEffect(() => {
      const eventHandler = (e: KeyboardEvent) => {
          const key = e.key;
          // if the key pressed isn't in the [a-z] interval, we don't do anything :
          if (!key.match(/^[a-z]$/)) return;

          e.preventDefault();
          addGuessedLetter(key);
      }

      document.addEventListener("keypress", eventHandler);

      return () => {
          document.removeEventListener("keypress", eventHandler);
      }
  }, [guessedLetters])  //it reloads when guessedLetters array changes

  return (
      <div className="App">
          <div className="win-lose" style={{color: isWinner? "darkgreen" : "darkred"}}>
              {isWinner ? "Winner !": ""}
              {isLoser ? "Loser !": ""}
          </div>
          <HangmanDraw numberOfGuessed={incorrectLetters.length}/>
          <HangmanWord word={wordToGuess} guessedLetters={guessedLetters} reveal={isLoser}/>
          <div className="keys-div">
              <HangmanKeyboard
                  activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                  inactiveLetters={incorrectLetters}
                  addGuessedLetters={addGuessedLetter}
                  disabled={isWinner || isLoser}
              />
          </div>
      </div>
  )


}

export default App
