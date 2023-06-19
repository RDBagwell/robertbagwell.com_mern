const { Pages } = require('./schema.mysql');

async function httpCreatePage(page) {
  await Pages.create(page);
}

async function httpGetAllPage() {
  const pages = await Pages.findAll();
  return pages
}

async function httpGetAllPagePagination( limit = 1, offset = 0) {
  const pages = await Pages.findAll(
    {
      limit,
      offset
    }
  );
  return pages
}

async function httpGetAllPageById(id) {
  const pages = await Pages.findOne({
    where:{
      id
    }
  });
  return pages
}

async function httpUpdatePage(id, page) {
  const updatedPage = await Pages.update(page, {
    where: {
      id
    }
  });
  return updatedPage
}

async function httpDeletePage(id) {
  const pages = await Pages.destroy({
    where:{
      id
    }
  });
  return pages
}

module.exports = {
  httpCreatePage,
  httpGetAllPage,
  httpGetAllPagePagination,
  httpGetAllPageById,
  httpUpdatePage,
  httpDeletePage
}