import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Accordion } from './Accordion'
import { useQnaContext } from '../hooks/useQnaContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { FaTrash } from "react-icons/fa";


const QnaDetails = ({ qna }) => {
    const { dispatch } = useQnaContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) return
        const response = await fetch(`/api/qna/${qna._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_QNA', payload: json })
        }
    }

    return (
        <div className='problem'>
            {
                qna.ispublic ? (
                    <div>
                        <p style={{ float: 'right' }}>{formatDistanceToNow(new Date(qna.createdAt), { addSuffix: true })}</p>
                        <p>question asked by: <u>{qna.username}</u></p>
                        <hr />
                        <p style={{ fontSize: '23px' }}>Title: <b><u>{qna.title}</u></b></p>
                        <pre style={{ fontFamily: 'inherit', overflow: 'auto' }}>Question:      {qna.question}</pre>
                        {/* <button style={{ float: 'right' }} onClick={handleClick}>delete</button> */}
                    </div>
                ) : (<p></p>)
            }

            {
                !qna.ispublic ? (
                    <div>
                        <button style={{ float: 'right' }} onClick={handleClick}><FaTrash style={{color: '#181a18'}}/></button>
                        <p style={{ fontSize: '23px' }}><b><u>{qna.title}</u></b> \ rating: {qna.rating ? qna.rating : 'n/a'}</p>
                        <Accordion title="Question">
                            <pre style={{ fontFamily: 'inherit', overflow: 'auto' }}>{qna.question}</pre>
                        </Accordion>
                        <Accordion title="Answer:">
                            <pre style={{ fontFamily: 'inherit', overflow: 'auto' }}>{qna.answer}</pre>
                        </Accordion>
                        <p style={{ float: 'right' }}>{formatDistanceToNow(new Date(qna.createdAt), { addSuffix: true })}</p>
                    </div>
                ) : (<p></p>)
            }


        </div >
    )
}

export default QnaDetails