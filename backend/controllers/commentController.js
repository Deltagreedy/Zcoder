<<<<<<< HEAD
const mongoose = require('mongoose')

const Qna = require('../models/qnaModel')
const Comments = require('../models/commentsModel')
const User = require('../models/userModel')

const addAComment = async (req, res) => {
    const user_id = req.user._id
    const quesId = req.params.id
    const { comment } = req.body

    if (!mongoose.Types.ObjectId.isValid(quesId)) {
        return res.status(404).json({ error: 'Not a valid object id' })
    }
    const qna = await Qna.findById({ _id: quesId })
    if (!qna) { res.status(404).json({ error: 'No such qna' }) }

    try {
        const useR = await User.findById(user_id)
        const username = useR.username
        const newComment = await Comments.create({ quesId, comment, username })
        res.status(200).json(newComment)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getComments = async (req, res) => {
    const quesId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(quesId)) {
        return res.status(404).json({ error: 'Not a valid object id' })
    }
    const qna = await Qna.findById({ _id: quesId })
    if (!qna) { res.status(404).json({ error: 'No such qna' }) }
    const comments = await Comments.find({quesId})
    res.status(200).json(comments)
=======
const Qna = require('../models/qnaModel')
const Comment = require('../models/qnaModel')
const mongoose = require('mongoose')

// add a comment
const addAComment = async(req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not a valid object id' })
    }

    try {
        const qna = await Qna.findById(id);
        if(!qna){
            return res.status(404).json({message: 'QnA not found'});
        }
        const newComment = new Comment({
            text: req.body.text,
            author: req.body.author,
            qna: id
        })
        qna.comments.push(newComment);
        await qna.save();
        res.status(201).json(qna);
    }

    catch(err){
        res.status(400).json({message: err.message});
    }
}

// get all comments
const getComments = async(req, res) => {
    try {
        const qna = await Qna.findById(req.params.id)
        if(!qna){
            return res.status(404).json({message: 'Post not found'})
        }

        res.json(qna.comments);
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
>>>>>>> origin/error
}


module.exports = {
<<<<<<< HEAD
    addAComment,
    getComments
=======
    getComments,
    addAComment
>>>>>>> origin/error
}