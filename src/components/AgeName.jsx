import { useState } from "react"
import './AgeName.css'
const initUser = () => ({ name: 'Cooper', age: 18 })

function AgeName() {
    const [user, setUser] = useState(initUser)
    return (
        <div className="agename-container">
            <input type="text"
                value={user.name}
                onChange={e => setUser(cur => {
                    return {
                        ...cur,
                        name: e.target.value
                    }
                })} />
            <p>
                <button onClick={() => setUser(cur => {
                    return {
                        ...cur,
                        age: cur.age - 1
                    }
                })}>-</button>
                {user.age}
                <button
                    onClick={() => setUser(cur => {
                        return {
                            ...cur,
                            age: cur.age + 1
                        }
                    })}
                >+</button>
            </p>
            <h3>My name is {user.name} and I am {user.age} years old.</h3>
        </div>
    )
}

export default AgeName;