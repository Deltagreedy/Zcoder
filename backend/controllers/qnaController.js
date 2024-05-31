const Qna = require('../models/qnaModel')
const mongoose = require('mongoose')

// get all qna
const getQnas = async (req, res) => {
    const user_id = req.user.id;
    const qnas = await Qna.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(qnas)
}

// get a single qna
const getAQna = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not a valid object id' })
    }

    const qna = await Qna.findById(id)

    if (!qna) { res.status(404).json({ error: 'No such qna' }) }

    res.status(200).json(qna)
}


// create a qna
const createQna = async (req, res) => {
    const { question, answer } = req.body

    let emptyFields = []

    if (!question) emptyFields.push('question')
    if (!answer) emptyFields.push('answer')

    if (emptyFields.length > 0)
        return res.status(400).json({ error: 'Please provide the following: ', emptyFields })

    try {
        const user_id = req.user._id
        const qna = await Qna.create({ question, answer, user_id })
        res.status(200).json(qna)
    }

    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    createQna,
    getQnas,
    getAQna
}