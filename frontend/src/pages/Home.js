<<<<<<< HEAD
import { useEffect, useState } from "react"

import QnaDetails from "../components/QnaDetails"

const Home = () => {
    const [qnas, setQnas] = useState()


    useEffect(() => {
        const fetchQueries = async () => {
            const response = await fetch('/api/qna/public')
            const json = await response.json()
            if (response.ok) {
                setQnas(json)
            }
        }

        fetchQueries()
    }, [])


    return (
        <div className="home">
            <div>
                {qnas ? qnas?.map(qna => (
                    <QnaDetails qna={qna} key={qna._id} />
                )) : (
                    <p>yo no problimo is added here yet</p>
                )}
            </div>
=======



const Home = () => {

    return (
        <div className="home">
            <h1>this is our home</h1>
>>>>>>> origin/error
        </div>
    )
}

export default Home