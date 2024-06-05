require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const qnaRoutes = require('./routes/qna')
<<<<<<< HEAD
const commentsRoute = require('./routes/comments')
const profileRoutes=require('./routes/profile')

=======
>>>>>>> origin/error

// express app
const app = express();


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
<<<<<<< HEAD
app.use('/api/comments', commentsRoute);
app.use('/api/qna', qnaRoutes);
app.use('/api/user', userRoutes);
app.use('/api/profile',profileRoutes);

=======
app.use('/api/qna', qnaRoutes);
app.use('/api/user', userRoutes);
>>>>>>> origin/error


// connected to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listens for request
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch(err => console.log(err));