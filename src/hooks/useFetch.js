import { useEffect, useState } from "react"

const useFetch = async (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
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
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))

        return () => controller.abort()
    }, [url])
    return {
        data,
        isLoading,
        isError
    }
}

export default useFetch