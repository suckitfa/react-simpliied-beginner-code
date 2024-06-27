import { useEffect, useState } from "react";

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const USER_UEL = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()
        fetch(USER_UEL, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
            .catch(console.log)
        return () => {
            controller.abort()
        }
    }, [])

    const loadingJSX = (<h4>Loading.......</h4>)
    return (
        <ul>
            {loading ? loadingJSX : users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>

    )
}

export default UserList;