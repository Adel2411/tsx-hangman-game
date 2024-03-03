export function HangmanWord() {
     const word : string = "adelo";
     const guessedLetters = ["a", "l"];
     return <div className="word-div">
          {word.split("").map((letter, i) => (
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