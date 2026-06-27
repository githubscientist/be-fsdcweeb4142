const Note = require('../models/note');

const notesController = {
    getAllNotes: async (request, response) => {
        try {
            // get all the notes from the database
            const notes = await Note.find({}, { __v: 0 });

            response.json(notes);
        } catch (e) {
            return response.status(500).json({ message: 'Error creating a new note. Try again later!', error: e.data.message });
        }
    },
    createNote: async (request, response) => {
        try {
            // get the data from the request body
            const { title, description, tag } = request.body;

            // create a new object from the model Note
            const newNote = new Note({
                title,
                description,
                tag
            });

            // save the newNote in the database
            const savedNote = await newNote.save();

            response.json({ message: 'Note created successfully!', data: savedNote });
        } catch (e) {
            return response.status(500).json({ message: 'Error creating a new note. Try again later!', error: e.data.message });
        }
    },
    updateNote: async (request, response) => {
        try {
            // get the id from the request params
            const { id } = request.params;

            // get the data from the request body
            const { title, description, tag } = request.body;

            // call the mongoose method to update the data
            await Note.findByIdAndUpdate(id, { title, description, tag });
            // const noteToUpdate = await Note.find({ tag });

            // noteToUpdate[0].title = title;

            // await noteToUpdate[0].save();

            // send the response
            response.json({ message: 'Note updated successfully' });
        } catch (e) {
            return response.status(500).json({ message: 'Error updating note. Try again later!', error: e.data.message });
        }
    },
    deleteNote: async (request, response) => {
        try {
            // get the id from the request params
            const { id } = request.params;

            // call the delete by id method
            await Note.findByIdAndDelete(id);

            // send a response
            response.json({ message: 'Note deleted successfully' });
        } catch (e) {
            return response.status(500).json({ message: 'Error deleting note. Try again later!', error: e.data.message });
        }
    },
    getNoteByID: async (request, response) => {
        try {
            // get the id from the request params
            const { id } = request.params;

            // call the delete by id method
            const note = await Note.findById(id);

            // send a response
            response.json(note);
        } catch (e) {
            return response.status(500).json({ message: 'Error fetching note. Try again later!', error: e.data.message });
        }
    }
}

module.exports = notesController;