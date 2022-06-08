const express = require('express');
const {
    getPosts,
    createPost,
    postsByUser,
    postById,
    isPoster,
    updatePost,
    deletePost,
    photo,
    singlepost,
    like,
    unlike } = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { createPostValidator } = require('../validator');
// const { singlePost } = require('../../frontend/src/post/apiPost');


const router = express.Router();

router.get('/posts', getPosts);
//like
router.put('/post/like', requireSignin, like)
//unlike
router.put('/post/unlike', requireSignin, unlike)
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get("/posts/by/:userId", requireSignin, postsByUser);
router.get('/post/:postId', singlepost)
router.put('/post/:postId', requireSignin, isPoster, updatePost);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);
//photo
router.get("/post/photo/:postId", photo)



//for any route containing :userId, the app will first execute userById()
router.param("userId", userById)

//for any route containing :postId, the app will first execute postById()
router.param("postId", postById)

module.exports = router;