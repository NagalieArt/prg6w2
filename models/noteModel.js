//connects mongoose package
let mongoose = require('mongoose');

//adds a schema in de database
let Schema = mongoose.Schema;

//Strings only! 
let noteModel = new Schema(
    {
        title: {type: String},
        author: {type: String},
        body: {type: String},
    }      
);

module.exports = mongoose.model('Note', noteModel);