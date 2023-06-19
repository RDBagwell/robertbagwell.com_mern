const express = require('express');
const posts = require('./posts/post.route');
const pageLinks = require('./pageLinks/pageLinks.route');

const api = express.Router();

api.use('/', posts);
api.use('/', pageLinks);

module.exports = api;