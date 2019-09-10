const { Router } = require('express')
const controllers = require('../controllers')

const router = Router()

router.get('/', (req, res) => res.send('welcome'))
router.post('/posts', controllers.createPost)
router.get('/posts', controllers.getAllPosts)
router.post('/users', controllers.createUser)
module.exports = router
