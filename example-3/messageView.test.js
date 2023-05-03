/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // const view = new MessageView();

  })
  it('displays a message when user clicks the button', () => {
    // document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('hides the message when user clicks the the hide message button', () => {
    // document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const showMessageButton = document.querySelector('#show-message-button');
    showMessageButton.click();

    const hideMessageButton = document.querySelector('#hide-message-button');
    hideMessageButton.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});