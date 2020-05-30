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
    

router.route('/posts/create')
    .get(adminControllers.createPosts );
    .post(adminControllers.submitPosts);


module.exports = router;
