import { useState } from "react";
import useFetch from "../hooks/useFetch";
function TestUseFetch() {
    const URLS = {
        USERS: 'https://jsonplaceholder.typicode.com/users',
        POSTS: 'https://jsonplaceholder.typicode.com/posts',
        COMMENTS: 'https://jsonplaceholder.typicode.com/comments'
    }
    const [url, setUrl] = useState(URLS.USERS)
    const {
        data,
        isLoading,
        isError
    } = useFetch(url);
    return (
        <>
            <div >
                <label >
                    <input
                        type="radio"
                        checked={url === URLS.USERS}
                        onChange={() => setUrl(URLS.USERS)}
                    />Users
                </label>
                <label >
                    <input
                        type="radio"
                        checked={url === URLS.POSTS}
                        onChange={() => setUrl(URLS.POSTS)} />Posts
                </label>
                <label >
                    <input type="radio" checked={url === URLS.COMMENTS} onChange={() => setUrl(URLS.COMMENTS)} />Comments
                </label>
            </div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : isError ? (
                <h1>Error</h1>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </>
    )
}
export default TestUseFetch;