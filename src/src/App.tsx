import './App.css'
import {useState} from "react";
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
  const [guessedletters, setGesssedletters] = useState<string[]>([]);

  // Incorrect letters types by the user :
  const incorectLetters = guessedletters.filter(letter => !wordToGuess.includes(letter));

  console.log(wordToGuess);

  return (
      <div className="App">
          <div className="win-lose">Lose Win</div>
          <HangmanDraw numberOfGuessed={incorectLetters.length}/>
          <HangmanWord word={wordToGuess} guessedLetters={guessedletters}/>
          <div className="keys-div">
              <HangmanKeyboard/>
          </div>
      </div>
  )


}

export default App
