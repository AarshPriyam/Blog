const express = require('express');
const router = express.Router();
const defaultControllers = require('../controllers/defaultControllers');

router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'default';

    next();
});
router.route('/')
    .get(defaultControllers.index);

router.route('/login')
    .get(defaultControllers.loginGet)
    .post(defaultControllers.loginPost);

router.route('/register')
    .get(defaultControllers.registerGet)
    .post(defaultControllers.registerPost);

module.exports = router;