import { useEffect, useState } from "react"

const useGears = () => {
    const [gears, setGears] = useState();

    useEffect(() => {
        fetch('gearsData.json')
            .then(res => res.json())
            .then(data => setGears(data))
    }, [])
    return [gears, setGears]
}
export default useGears;