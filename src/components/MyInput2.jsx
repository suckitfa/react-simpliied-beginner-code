import { useState } from "react";

function MyInput2() {
    const [name, setName] = useState('Kyle')

    return <input type="text" value={name} onChange={e => setName(e.target.value)} />
}

export default MyInput2;