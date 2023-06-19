const Pages = require('../schema.mongoose');

async function httpCreatePage(page) {
    await Pages.create(page);
}

async function httpGetAllPage() {
    const pages = await Pages.find({});
    return pages
}

async function httpGetAllPagePagination( limit = 1, offset = 0) {
    const pages = await Pages.find({}).skip(offset).limit(limit);
    return pages
}

async function httpGetAllPageById(id) {
    const pages = await Pages.findOne({ _id: id });
    return pages
}
  
async function httpUpdatePage(id, page) {
    const updatedPage = await Pages.findOneAndUpdate(
        {_id: id},
        page
    );
    return updatedPage
}

async function httpDeletePage(id) {
    const pages = await Pages.deleteOne({ _id: id });
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