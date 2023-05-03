const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

model = new NotesModel;
model.addNote("Testing test 1,2 1,2")

view = new NotesView(model);
view.displayNotes();

console.log("Notes app is running.");
