class NotesView {
  constructor(modelInstance) {
    this.model = modelInstance;
    this.noteInputListener();
  }

  noteInputListener() {
    const addNoteButton = document.querySelector('#add-note-button');
    addNoteButton.addEventListener('click', () => {
      this.addUserNote();
    })
  }
  
  addUserNote() {
    const inputField = document.querySelector('#note-input')
    const note = inputField.value
    this.model.addNote(note);
    // clear the input field
    inputField.value = null;
    this.clearNotes();
    this.displayNotes();
  }

  clearNotes() {
    const noteList = document.querySelectorAll('.note');
    noteList.forEach((note) => {
      note.remove();
    })
  }

  displayNotes() {
    let notesArray = this.model.getNotes();
    notesArray.forEach((note) => {
      const noteElement = document.createElement('div');
      // Add the note class the HTML element
      noteElement.classList.add('note');
      noteElement.textContent = note;
      document.querySelector('body').append(noteElement);
    });
  }
}

module.exports = NotesView;
