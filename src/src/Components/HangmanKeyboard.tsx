const KEYBOARD_KEYS = [
    "a", "b",
    "c", "d",
    "e","f",
    "g", "h",
    "i", "j", "k",
    "l", "m",
    "n", "o",
    "p", "q",
    "r", "s",
    "t", "u",
    "v", "w",
    "x", "y", "z"
];

type keyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetters: (letter: string) => void,
    disabled?: boolean
}

export function HangmanKeyboard({activeLetters, inactiveLetters, addGuessedLetters, disabled = false}: keyboardProps) {
    return <div className="keyboard-div">
        {KEYBOARD_KEYS.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            const activeClass: string = isActive ? "active" : "";
            const inactiveClass: string = isInactive ? "inactive" : "";
            return (<button onClick={() => addGuessedLetters(key)}  disabled={isActive || isInactive || disabled} className={`key-button ${activeClass} ${inactiveClass}`} key={key}>
                {key}
            </button>)
        })}
    </div>
}