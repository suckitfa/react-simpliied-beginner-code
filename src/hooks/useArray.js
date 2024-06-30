import { useRef, useState } from "react"

function useArray(initArr = []) {
    // to store the init Array
    const initArrayRef = useRef([...initArr])
    const [arr, setArr] = useState(initArr)


    // const set = (newArr) => {
    //     setArr(newArr)
    // }

    const push = (ele) => {
        setArr(curArr => [...curArr, ele])
    }

    //muti ways to implement this
    const replace = (index, ele) => {
        setArr(curArr => {
            return curArr.map((item, k) => {
                if (index === k) return ele;
                return item;
            })
        })
    }

    const remove = (index) => {
        setArr(curArr => curArr.filter((_, i) => i !== index))
    }

    const filter = (func) => {
        setArr(curArr => curArr.filter(func))
    }

    const reset = () => {
        setArr(initArrayRef.current)
    }
    const clear = () => setArr([])

    return {
        array: arr, set: setArr, push, replace, filter, remove, clear, reset
    }
}

export default useArray