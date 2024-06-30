import { useEffect, useState } from "react"

export default function useLocalStorage(key, initVal) {
    // we can pass a func to the setState
    const [value, setValue] = useState(() => {
        const localVal = localStorage.getItem(key)
        if (localVal) return JSON.parse(localVal)
        else {
            // the initVal maybe a func or a pure val
            return typeof initVal === 'function' ? initVal() : initVal
        }
    })


    // when value change store it into the localStorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [
        value,
        setValue
    ]
}