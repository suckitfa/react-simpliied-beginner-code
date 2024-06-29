import { useState } from "react"

/**
 * @description toggle a boolean value
 * @param {boolean} initVal
 * @returns {Array} [value,toggleValue]
*/
function useToggle(initVal) {
    const [value, setValue] = useState(initVal)
    const toggleValue = () => {
        setValue(cur => !cur)
    }
    return [
        value,
        toggleValue
    ]
}

function index() {
    // const [isDarkMode, setIsDarkMode] = useState(false)
    const [isDarkMode, toggleDarkMode] = useToggle(false)
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
                <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            </div>
        </>
    )
}
export default index;