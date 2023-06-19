// const { 
//   httpCreatePage,
//   httpGetAllPage,
//   httpGetAllPagePagination,
//   httpGetAllPageById,
//   httpUpdatePage,
//   httpDeletePage
// } = require('../../models/pages.model');

const { 
  httpCreatePage,
  httpGetAllPage,
  httpGetAllPageById,
  httpUpdatePage,
  httpDeletePage
} = require('../../models/mongoose/pages.model');

async function getAllPage(req, res) {
  const pages = await httpGetAllPage();
  if (!pages || pages.length === 0) return res.status(404).json({message: "No pages found"});

  return res.status(200).json( pages );
}

async function getPagePagination(req, res){
  return res.status(200).json({message:"Success"});
}

async function getPageById(req, res) {
  const id = req.params.id;
  const pages = await httpGetAllPageById(id);
  if (!pages || pages.length === 0) return res.status(404).json({message: "No pages found"});
  return res.status(200).json( pages );
}

async function addPage(req, res) {
  const paload = req.body;
  if(!paload.path || !paload.title || !paload.description) return res.status(400).json({error: 'Missing required page property'});

  await httpCreatePage(paload);
  return res.status(201).json({message:"Success", paload});
}

async function updatePage(req, res) {
  const id = req.params.id;
  const paload = req.body;

  const updated = await httpGetAllPageById(id); 
  if(!updated) return res.status(404).json({message:`There is nothing to update.`});

  await httpUpdatePage(id, paload);
  return res.status(201).json({message:"Success", id, paload});
}

async function deletePage(req, res) {
  const id = req.params.id;
  const deleted = await httpDeletePage(id);
  if(!deleted) return res.status(404).json({message:`There is nothing to delete`});

  return res.status(201).json({message:`Success page with id:${id} was deleted.`, deleted});
}

module.exports = {
  getAllPage,
  getPagePagination,
  getPageById,
  addPage,
  updatePage,
  deletePage
}