import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDate = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
            } catch (error) {
                console.log("Erro:", error)
            }

            setLoading(false)


        }

        fetchDate()
    }, [url])

    return { data, loading }
}