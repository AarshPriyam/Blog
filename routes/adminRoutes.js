const express =  require('express');
const router =  express.Router();
const adminControllers =  require('../controllers/adminControllers');


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'admin';

    next();
});


router.route('/')
    .get(adminControllers.index);


router.route('/posts')
    .get(adminControllers.getPosts)
    .post(adminControllers.submitPosts);


router.route('/posts/create')
    .get(adminControllers.createPosts );


module.exports = router;
