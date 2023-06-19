const { Posts } = require('./schema.mysql');

async function httpCreatePost(post) {
  await Posts.create(post);
}

async function httpGetAllPost() {
  const posts = await Posts.findAll();
  return posts
}

async function httpGetAllPostPagination( limit = 1, offset = 0) {
  const posts = await Posts.findAll(
    {
      limit,
      offset
    }
  );
  return posts
}

async function httpGetAllPostById(id) {
  const posts = await Posts.findOne({
    where:{
      id
    }
  });
  return posts
}

async function httpUpdatePost(id, post) {
  const updatedPost = await Posts.update(post, {
    where: {
      id
    }
  });
  return updatedPost
}

async function httpDeletePost(id) {
  const posts = await Posts.destroy({
    where:{
      id
    }
  });
  return posts
}

module.exports = {
    httpCreatePost,
    httpGetAllPost,
    httpGetAllPostPagination,
    httpGetAllPostById,
    httpUpdatePost,
    httpDeletePost
}