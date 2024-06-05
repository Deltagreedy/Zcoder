const express = require('express')

// controller function
<<<<<<< HEAD
const { getUser, getThisUser, signupUser, loginUser } = require('../controllers/userController')

const router = express.Router()

router.get('/', getUser)

router.get('/:id', getThisUser)

=======
const { signupUser, loginUser } = require('../controllers/userController')

const router = express.Router()

>>>>>>> origin/error
// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)


module.exports = router;