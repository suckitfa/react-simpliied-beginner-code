import { useState } from "react"


function index() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <>
            <div style={
                {
                    backgroundColor: isDarkMode ? '#333' : 'white',
                    color: isDarkMode ? 'white' : '#333',
                    padding: '10px',
                    border: '1px solid red',
                    borderColor: isDarkMode ? 'white' : '#333',
                }
            }>
                <label >
                    Name: <input type="text" />
                </label>
                <br />
                <br />
                <button onClick={() => setIsDarkMode(cur => !cur)}>Toggle Dark Mode</button>
            </div>
        </>
    )
}
export default index;