import { useEffect, useState } from "react"

export default function useLocalStorage(key, initVal) {
    const [value, setValue] = useState(initVal)

    // pulled the value from the inital load from the localStorage
    useEffect(() => {
        const localVal = localStorage.getItem(key)
        if (localVal) {
            setValue(localVal)
        } else {
            return initVal
        }
    }, [])

    // when value change store it into the localStorage
    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value])

    return [
        value,
        setValue
    ]
}