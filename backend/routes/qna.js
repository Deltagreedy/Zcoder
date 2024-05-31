const express = require('express')
const {
    createQna,
    getQnas,
    getAQna
} = require('../controllers/qnaController')
const {
    getComments,
    addAComment
} = require('../controllers/commentController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/', getQnas)

router.get('/:id', getAQna)

router.post('/', createQna)

router.get('/:id/comments', getComments)

router.post('/:id/comments', addAComment)

module.exports = router;