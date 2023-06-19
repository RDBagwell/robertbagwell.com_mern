const { 
    httpGetAllPost,
    httpGetAllPostById,
    httpGetAllPostPagination,  
    httpCreatePost,
    httpUpdatePost,
    httpDeletePost
} = require('../../models/posts.model')

async function getAllPost(req, res) {
    const posts = await httpGetAllPost();
    if (!posts || posts.length === 0) return res.status(404).json({message: "No posts found"});

    return res.status(200).json( posts );
}

async function getPostPagination(req, res){
    const posts = await httpGetAllPostPagination();
    if (!posts || posts.length === 0) return res.status(404).json({message: "No posts found"});

    return res.status(200).json( posts );
}

async function getPostById(req, res) {
    const id = req.params.id;
    const post = await httpGetAllPostById(id);
    if (!post || post.length === 0) return res.status(404).json({message: "No posts found"});
   
    return res.status(200).json(post);
}

async function addPost(req, res) {
    const post = req.body;
    if(!post.userId || !post.title || !post.body) return res.status(400).json({error: 'Missing required post property'});
    
    await httpCreatePost(post);
    return res.status(201).json({message:"Success", post});
}

async function updatePost(req, res) {
    const id = req.params.id;
    const post = req.body;
    const updated = await httpGetAllPostById(id); 
    if(!updated) return res.status(404).json({message:`There is nothing to update.`});

    await httpUpdatePost(id, post);
    return res.status(201).json({message:"Success", id, post});
}

async function deletePost(req, res) {
    const id = req.params.id;
    const deleted = await httpDeletePost(id);
    if(!deleted) return res.status(404).json({message:`There is nothing to delete`});

    return res.status(201).json({message:`Success post with id:${id} was deleted.`, deleted});
}

module.exports = {
    getAllPost,
    getPostById,
    getPostPagination,
    addPost,
    updatePost,
    deletePost
}