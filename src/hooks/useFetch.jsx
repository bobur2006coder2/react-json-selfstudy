import { useEffect } from "react"
import { useState } from "react"

export function useFetch(url) {
    const [date, setDate] = useState(null)
    const [pending, isPending] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchDate = async () => {
            isPending(true)
            try{
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const date = await res.json()
                setDate(date);
                isPending(false)
            }catch(error){
                setError(error.message);
                isPending(false)
            }

        }
        fetchDate()
    }, [url])


    return { date ,pending,error}
}
