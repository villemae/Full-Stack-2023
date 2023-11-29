const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

app.use(cors())
app.use(express.json())

const mongoUrl = 'mongodb+srv://vileeni:uWk4Fr5llWRvFV7y@part03.0br4nvu.mongodb.net/bloglist?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch(error => {
        logger.error('error connecting to MongoDB', error.message)
    })

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Blog = mongoose.model('Blog', blogSchema)

app.get('/api/blogs', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
        .catch(error => {
            logger.error(error.message)
        })
})

app.post('/api/blogs', (request, response) => {
    logger.info(request.body)
    const blog = new Blog(request.body)

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
        .catch(error => {
            logger.error(error.message)
        })
})

const PORT = 3003
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})