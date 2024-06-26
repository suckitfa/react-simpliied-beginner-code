import { useEffect, useState } from "react";

function TestFetchData() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const API_URL = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        const controller = new AbortController();
        fetch(API_URL, {
            signal: controller.signal
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res)
                }
            })
            .then(data => {
                setUsers(data)
            })
            .catch(e => {
                if (e?.name === 'AbortError') return
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })
        return () => {
            controller.abort()
        }
    }, [])

    let jsx
    if (loading) jsx = <h2>Loading....</h2>
    else if (error != null) jsx = <h2>Error....</h2>
    else jsx = (<ul>{users.map(i => (<li key={i.name}>{i.name}</li>))}</ul>)

    return (
        <div>
            <h1>Users</h1>
            {jsx}
        </div>
    )
}

export default TestFetchData;