import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useQnaContext } from '../hooks/useQnaContext'
import { useAuthContext } from '../hooks/useAuthContext'

import QnaDetails from '../components/QnaDetails'

const Problem = () => {
    const { qnas, dispatch } = useQnaContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchQnas = async () => {
            const response = await fetch('/api/qna', {
                headers: { 'Authorization': `Bearer ${user.token}` },
            })
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_QNAS', payload: json })
            }
        }

        if (user) {
            fetchQnas()
        }
    }, [dispatch, user])

    return (
        <div className="problems">
            <Link to="/problem/new" style={{ textDecoration: 'none', color: 'inherit' }}> <button className='addd'>add a problem</button></Link>
            <h1>these are my problems:</h1>
            <div>
                {qnas ? qnas.map(qna => (
                    <QnaDetails qna={qna} key={qna._id} />
                )) : (
                    <p>yo nothing is added at</p>
                )}
            </div>
        </div>
    )
}


export default Problem