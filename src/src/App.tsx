import './App.css'
import {useEffect, useState} from "react";
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
  const [guessedLetters, setGuesssedLetters] = useState<string[]>([]);

  // Incorrect letters types by the user :
  const incorectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  // Function to add the pressed key in the guessedLetters array :
  function addGuessedLetter(letter: string): void {
      if (guessedLetters.includes(letter)) return;

      setGuesssedLetters(currentLetters => [...currentLetters, letter]);
  }

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
  }, [])

  return (
      <div className="App">
          <div className="win-lose">Lose Win</div>
          <HangmanDraw numberOfGuessed={incorectLetters.length}/>
          <HangmanWord word={wordToGuess} guessedLetters={guessedLetters}/>
          <div className="keys-div">
              <HangmanKeyboard/>
          </div>
      </div>
  )


}

export default App
