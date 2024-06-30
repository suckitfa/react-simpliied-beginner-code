import { useEffect, useState } from "react"

const useFetch = (url, options = {}) => {
    const [data, setData] = useState()
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const controller = new AbortController()

    useEffect(() => {
        setData(undefined)
        setIsError(false)
        setIsLoading(true)

        fetch(url, {
            signal: controller.signal,
            ...options
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                return Promise.reject(res)
            })
            .then(setData)
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setIsError(true)
                }
            })
            .finally(() => {
                if (controller.signal.aborted) return
                setIsLoading(false)
            })

        return () => controller.abort()
    }, [url])
    return { data, isError, isLoading }
}

export default useFetch