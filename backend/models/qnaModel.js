const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
    title: {
        type: String,
        required: true
    },
    rating:{
        type: Number
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    ispublic: {
        type: Boolean,
        default: false
    },
    username: {
        type: String
    },
    user_id: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Qna', qnaSchema)