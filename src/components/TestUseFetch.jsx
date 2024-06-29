import useFetch from "../hooks/useFetch";
function TestUseFetch() {
    const USER_URL = 'https://jsonplaceholder.typicode.com/users'
    const { isLoading, data, isError } = useFetch(USER_URL)
    return (
        <>
            {
                isLoading ? <h1>Loading......</h1> :
                    <UserList users={data}></UserList>
            }
        </>
    )
}
function UserList({ users }) {
    return (
        <ul>
            {
                users.map(i => (<li key={i.id}>{i.name},{i.email}</li>))
            }
        </ul>
    )
}
export default TestUseFetch;