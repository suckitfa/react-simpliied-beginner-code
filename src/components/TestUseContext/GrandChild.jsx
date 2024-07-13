import { useContext } from "react"
import {
    ThemeContext
} from '../../App.jsx'

export function GrandChild() {
    const {
        isDarkMode,
        toggleTheme
    } = useContext(
        ThemeContext
    )
    return (
        <button
            onClick={toggleTheme}
            style={
                {
                    background: isDarkMode ? 'white' : '#333',
                    color: isDarkMode ? '#333' : 'white',
                    border: 'none',
                    padding: '0.5em',
                    borderRadius: '0.25em',
                    cursor: 'pointer'
                }
            }
        >
            Toggle Theme
        </button>
    )
}