class NotesView {
  constructor(modelInstance) {
    this.model = modelInstance;
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
