/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a paragraph to the body', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.addParagraph('testing.. testing.. 123');

    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it('removes all paragraph from the document', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.removeAllParagraphs();

    expect(document.querySelectorAll('p').length).toBe(0);
  })
});