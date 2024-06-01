import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {Accordion} from './Accordion'

const QnaDetails = ({ qna }) => {

    return (
        <div className='problem'>
            <p style={{ float: 'right' }}>{formatDistanceToNow(new Date(qna.createdAt), { addSuffix: true })}</p>
            <p style={{ fontSize: '30px' }}><b><u>{qna.title}</u></b> \ rating: {qna.rating ? qna.rating : 'n/a'}</p>
            {/* <p><b><u>Question:</u></b> {qna.question}</p>
            <p><b><u>Solution:</u></b> {qna.answer}</p> */}
            <Accordion title="Question">
                <p>{qna.question}</p>
            </Accordion>
            <Accordion title="Answer:">
                <p>{qna.answer}</p>
            </Accordion>
        </div>
    )
}

export default QnaDetails