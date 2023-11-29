const router = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')

router.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
        .catch(error => {
            logger.error(error.message)
        })
})

router.post('/', (request, response) => {
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

module.exports = router