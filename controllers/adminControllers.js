const Post =  require('../models/PostModel');



module.exports = {

    index: (req, res) => {
         Post.find().then(posts => {
             res.render('admin/posts/index', {posts: posts }); 
         });
     }, 

     getPosts: (req, res) => {
         res.render('admin/posts/index');
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