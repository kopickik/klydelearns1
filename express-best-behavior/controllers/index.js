const models = require('../db/models')

const createPost = async(req, res) => {
  try {
    const post = await models.Post.create(req.body)
    return res.status(201).json({
      post
    })
  } catch (err) {
    return res.status(500).json({error: err.message})
  }
}

const createUser = async(req, res) => {
  try {
    const newUser = await models.User.create(req.body)
    return res.status(201).json({
      newUser
    })
  } catch (err) {
    return res.status(500).json({error: err.message})
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await models.Post.findAll({
      include: [
        {
          model: models.Comment,
          as: 'comments'
        },
        {
          model: models.User,
          as: 'author'
        }
      ]
    })
    return res.status(200).json({posts})
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

module.exports = {
  createPost,
  createUser,
  getAllPosts
}
