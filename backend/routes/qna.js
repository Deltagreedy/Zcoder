const express = require('express')
const {
    getQueries,
    createQna,
    getQnas,
    deleteQna
} = require('../controllers/qnaController')
const {
    getComments,
    addAComment
} = require('../controllers/commentController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.get('/public', getQueries)

router.use(requireAuth)     // yo

router.get('/problemset', getQnas)

// router.get('/problemset/:id', getAQna)

router.post('/problemset', createQna)

router.get('/:id/comments', getComments)

router.post('/:id/comments', addAComment)

router.delete('/:id', deleteQna)

module.exports = router;