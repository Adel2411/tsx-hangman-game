type HangmanWordProps = {
     word: string;
     guessedLetters: string[];
}

export function HangmanWord({word, guessedLetters}: HangmanWordProps) {
     // const word : string = "adelo";
     // const guessedLetters = ["a", "l",];
     return <div className="word-div">
          {word.split("").map((letter: string, i) => (
               <span className="letter" key={i}>
                    <span style={{
                         visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
                         color: "#2b2b2b",
                    }}>
                        {letter}
                    </span>
               </span>
          ))}
     </div>
}