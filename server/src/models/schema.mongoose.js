const mongoose =  require('mongoose');

const Pages = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        default: "https://placehold.co/300?text=No%20Image"
    }
});

module.exports = mongoose.model('Page', Pages);