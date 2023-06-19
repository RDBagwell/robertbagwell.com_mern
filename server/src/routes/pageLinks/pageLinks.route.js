const express = require('express');
const { 
    getAllPage,
    getPageById,
    addPage,
    updatePage,
    deletePage 
} = require('./pageLinks.controller');

const pageRouter = express.Router();

pageRouter.get('/page', getAllPage);
pageRouter.get('/page/:id', getPageById);
pageRouter.post('/page', addPage);
pageRouter.post('/page/:id', updatePage);
pageRouter.delete('/page/:id', deletePage);

module.exports = pageRouter;