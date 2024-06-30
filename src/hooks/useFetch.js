import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState()
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const controller = new AbortController()

    useEffect(() => {
        setData(undefined)
        setIsError(false)
        setIsLoading(true)

        fetch(url, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(setData)
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setIsError(true)
                }
            })
            .finally(() => setIsLoading(false))

        return () => controller.abort()
    }, [url])
    return { data, isError, isLoading }
}

export default useFetch