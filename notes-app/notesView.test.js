/**
* @jest-environment jsdom
*/

const fs = require('fs');
const View = require('./notesView');
const Model = require('./notesModel');

require('jest-fetch-mock').enableMocks();
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
  });

  it('lets the user add a note', () => {
    mockModel = new Model();
    view = new View(mockModel);

    mockModel.getNotes.mockImplementation(() => ['Natasha was here']);

    const inputBox = document.querySelector('#note-input');
    const addNoteButton = document.querySelector('#add-note-button');

    inputBox.value = "Natasha was here";
    addNoteButton.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelector('div.note').textContent).toEqual('Natasha was here');
    expect(mockModel.addNote).toHaveBeenCalledWith('Natasha was here');
  })

  it('clears the notes display before adding a new note', () => {
    mockModel = new Model();
    view = new View(mockModel);

    const inputBox = document.querySelector('#note-input');
    const addNoteButton = document.querySelector('#add-note-button');

    mockModel.getNotes.mockImplementation(() => ['Natasha was here']);
    inputBox.value = "Natasha was here";
    addNoteButton.click();


    mockModel.getNotes.mockImplementation(() => ['Natasha was here', 'the second note']);
    inputBox.value = "the second note";
    addNoteButton.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Natasha was here');
    expect(mockModel.addNote).toHaveBeenCalledTimes(2);
  })

  it('displays notes returned from an API call', () => {
    const mockModel = {
      notes: [],
      getNotes: (() => mockModel.notes ),
      setNotes: ((notes) => { mockModel.notes = notes } )
    };

    const mockClient = {
      loadNotes : ((callback) => {
        return fetch('http://localhost:3000/notes')
          .then((response) => response.json())
          .then((data) => callback(data));
      })
    };
    const view = new View(mockModel, mockClient);

    fetch.mockResponseOnce(JSON.stringify(["This note is coming from the server"]));

    view.displayNotesFromApi()
      .then(() => {
        expect(document.querySelector('.note').textContent).toEqual('This note is coming from the server');
      }); 
    // 
  })
})