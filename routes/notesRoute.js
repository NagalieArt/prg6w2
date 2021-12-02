// getting express package
const express = require("express");

//
let Note = require("../models/noteModel");

let router = () => {
    let notesRouter = express.Router();

    notesRouter.route('/notes')
    
    .get( (req, res) => { 
        let notes = [1, 2, 3, 4]
        res.send(notes)
    })
    
    .post( (req, res) => { 
        let note = new Note(req.body);

        note.save();

        res.send("POST op /")
    });

    return notesRouter;
};

module.exports = router;