const Post =  require('../models/PostModel');



module.exports = {

    index: (req, res) => {
         res.render('admin/index');
     },

     getPosts: (req, res) => {
         res.send("all posts blahh");
     },

     submitPosts: (req, res) => {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        });

        newPost.save().then(post => {
            console.log(post);
            res.flash('success-message','post created successfully'); 
            res.redirect('/admin/post');
        });
    },

    createPosts: (req, res) => {
        res.render('admin/posts/create');
    }
    };