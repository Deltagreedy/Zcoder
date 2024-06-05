const mongoose = require('mongoose')

const Schema = mongoose.Schema

<<<<<<< HEAD
const qnaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
=======
const commentSchema = new Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    qna: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Qna'
    }
})

module.exports = mongoose.model('Comment', commentSchema)

const qnaSchema = new Schema({
>>>>>>> origin/error
    question: {
        type: String,
        required: true
    },
    answer: {
<<<<<<< HEAD
        type: String
    },
    ispublic: {
        type: Boolean,
        default: false
    },
    username: {
        type: String
=======
        type: String,
        required: true
>>>>>>> origin/error
    },
    user_id: {
        type: String,
        required: true
<<<<<<< HEAD
    }
}, { timestamps: true })


module.exports =  mongoose.model('Qna', qnaSchema)
=======
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Qna', qnaSchema)
>>>>>>> origin/error
