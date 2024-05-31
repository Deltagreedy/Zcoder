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
}


module.exports = {
    getComments,
    addAComment
}