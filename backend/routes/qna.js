const express = require('express')
const {
<<<<<<< HEAD
    getQueries,
    createQna,
    getQnas,
    deleteQna
} = require('../controllers/qnaController')
=======
    createQna,
    getQnas,
    getAQna
} = require('../controllers/qnaController')
const {
    getComments,
    addAComment
} = require('../controllers/commentController')
>>>>>>> origin/error

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

<<<<<<< HEAD
router.get('/public', getQueries)

router.use(requireAuth)     // yo

router.get('/problemset', getQnas)

// router.get('/problemset/:id', getAQna)

router.post('/problemset', createQna)

router.delete('/:id', deleteQna)
=======
router.use(requireAuth)

router.get('/', getQnas)

router.get('/:id', getAQna)

router.post('/', createQna)

router.get('/:id/comments', getComments)

router.post('/:id/comments', addAComment)
>>>>>>> origin/error

module.exports = router;