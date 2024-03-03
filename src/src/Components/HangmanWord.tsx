type HangmanWordProps = {
     word: string;
     guessedLetters: string[];
     reveal?: boolean;
}

export function HangmanWord({word, guessedLetters, reveal = false}: HangmanWordProps) {
     // const word : string = "adelo";
     // const guessedLetters = ["a", "l",];
     return <div className="word-div">
          {word.split("").map((letter: string, i) => (
               <span className="letter" key={i}>
                    <span style={{
                         visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                         color: reveal && !guessedLetters.includes(letter) ? "darkred" : "black",
                    }}>
                        {letter}
                    </span>
               </span>
          ))}
     </div>
}