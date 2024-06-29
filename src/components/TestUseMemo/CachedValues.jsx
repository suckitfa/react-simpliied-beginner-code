import { useMemo, useState } from "react";

const LIST = Array(1_000_000).fill().map((_, i) => i + 1)
function CachedValues() {
    const [query, setQuery] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    // const filteredList = LIST.filter(n => n.toString().includes(query))
    // console.log('filteredList.length = ', filteredList.length)
    //  cache a calculation between re-renders
    const filteredList = useMemo(() => {
        console.log('useMemo ')
        return LIST.filter(n => n.toString().includes(query))
    }, [query])

    console.log('filteredList.length = ', filteredList.length)

    return (
        <div style={
            {
                border: '1px solid red',
                width: '500px',
                height: '300px',
                backgroundColor: isDarkMode ? '#333' : "white",
                color: isDarkMode ? "white" : '#333',
                display: 'flex',
                flexDirection: 'column',
            }
        }>
            <label >
                Query:
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
            <label>
                <input type="checkbox" onChange={(e) => setIsDarkMode(e.target.checked)} />
                Dark Mode
            </label>
        </div>
    )
}

export default CachedValues;