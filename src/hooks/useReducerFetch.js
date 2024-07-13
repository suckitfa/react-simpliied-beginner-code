import { useEffect, useReducer } from "react"

const ACTIONS = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR'
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.FETCH_START:
            return {
                isError: false,
                isLoading: true,
            }
        case ACTIONS.FETCH_SUCCESS:
            return {
                isError: false,
                isLoading: false,
                data: payload.data
            }
        case ACTIONS.FETCH_ERROR:
            return {
                isLoading: false,
                isError: true,
            }
        default:
            throw Error("not defined action!")
    }
}

const useFetch = (url, options = {}) => {
    const [state, dispatch] = useReducer(reducer,
        {
            isError: false,
            isLoading: true,
        }
    )


    const controller = new AbortController()

    useEffect(() => {
        dispatch({
            type: ACTIONS.FETCH_START
        })

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
            .then((data) => dispatch({
                type: ACTIONS.FETCH_SUCCESS,
                payload: { data }
            }))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    dispatch({
                        type: ACTIONS.FETCH_ERROR,
                        payload: {
                            error: err
                        }
                    })
                }
            })
            .finally(() => {
                if (controller.signal.aborted) return
                // setIsLoading(false)
            })

        return () => controller.abort()
    }, [url])
    return state
}

export default useFetch