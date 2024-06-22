import { useState } from "react";

function MyInput() {
    const [text, setText] = useState();
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <input value={text} type="text" onChange={handleChange} />
            <p>You typed: {text}</p>
            <button onClick={() => setText('Hello')}>Reset</button>
        </div>
    );
}

export default MyInput;