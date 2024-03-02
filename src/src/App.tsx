import './App.css'
import {useState} from "react";
import wordList from "./wordList.json"
import {HangmanDraw} from "./Components/HangmanDraw.tsx";
import {HangmanWord} from "./Components/HangmanWord.tsx";
import {HangmanKeyboard} from "./Components/HangmanKeyboard.tsx";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  });
  const [gessedletters, setGesssedletters] = useState<string[]>([]);

  console.log(wordToGuess)

  return (
      <div className="App">
          <div className="win-lose">Lose Win</div>
          <HangmanDraw/>
          <HangmanWord/>
          <HangmanKeyboard/>
      </div>
  )


}

export default App
