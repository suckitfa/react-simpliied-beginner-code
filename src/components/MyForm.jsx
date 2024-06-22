import { useState } from "react";

function MyForm() {
    const [user, setUser] = useState({
        name: 'Cooper',
        age: 10
    })
    const hanelInputChange = (e) => {
        setUser(curUser => {
            return {
                ...curUser,
                name: e.target.value
            }
        })
    }

    const handleClickBtn = () => {
        setUser(cur => {
            return {
                ...cur,
                age: cur.age + 1
            }
        })
    }

    return (
        <>
            <input
                type="text"
                value={user.name}
                onChange={hanelInputChange} />
            <button onClick={handleClickBtn}>Increment age</button>
            <p>Hello, {user.name}. You are {user.age}.</p>
        </>
    )
}

export default MyForm;