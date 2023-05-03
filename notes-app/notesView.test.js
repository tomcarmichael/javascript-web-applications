/**
* @jest-environment jsdom
*/

const fs = require('fs');
const View = require('./notesView');
const Model = require('./notesModel');

jest.mock('./notesModel.js');

describe('NotesView class', () => {
  beforeEach(() => {
    Model.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html'); 
  });

  it('displays all notes', () => {
    mockModel = new Model();
    view = new View(mockModel);

    expect(document.querySelectorAll('div.note').length).toEqual(0);

    mockModel.getNotes.mockImplementation(() => ['the same thing we do every night pinky', 'try to take over the world'])
    
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })
})