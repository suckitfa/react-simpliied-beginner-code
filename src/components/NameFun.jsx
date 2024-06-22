function MyName({ name, age, isProgrammer }) {
    console.log('isProgrammer = ', isProgrammer)
    return (
        <div>
            <h3>{name ? 'Cooper Tang' : name}</h3>
            <h3>age = {age}</h3>
        </div>
    )
}

export default MyName;