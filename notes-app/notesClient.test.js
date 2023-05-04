const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('NotesClient class', () => {
  it('.loadNotes() fetches the list of the notes from the server', () => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify(
      ["This note is coming from the server"]
    ));

    return client.loadNotes((notes) => {
      expect(notes).toEqual(["This note is coming from the server"]);
    });
  });
});