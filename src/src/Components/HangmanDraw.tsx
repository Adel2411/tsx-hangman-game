const HEAD = (
    <div className="head"></div>
)

const BODY = (
    <div className="body"></div>
)

const RIGHT_ARM = (
    <div className="right-arm"></div>
)

const LEFT_ARM = (
    <div className="left-arm"></div>
)

const RIGHT_LEG = (
    <div className="right-leg"></div>
)

const LEFT_LEG = (
    <div className="left-leg"></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawProps = {
    numberOfGuessed: number,
}

export function HangmanDraw( {numberOfGuessed }: HangmanDrawProps): JSX.Element {
    return <div className="draw-div">
        {BODY_PARTS.slice(0, numberOfGuessed)}
        <div style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0,
        }}></div>
        <div style={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px",
        }}></div>
        <div style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
        }}></div>
        <div style={{
            height: "10px",
            width: "250px",
            background: "black",
        }}></div>
    </div>
}