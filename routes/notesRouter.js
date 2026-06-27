// import express
const express = require('express');
const { getAllNotes, createNote, updateNote, deleteNote } = require('../controllers/notesController');

// create a router
const notesRouter = express.Router();

// configure the routes
notesRouter.get('/', getAllNotes);
notesRouter.post('/', createNote);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/', deleteNote);

// export the router
module.exports = notesRouter;