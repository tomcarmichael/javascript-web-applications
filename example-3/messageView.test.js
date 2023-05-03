/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');

  })
  it('displays a message when user clicks the button', () => {
    const inputBox = document.querySelector('#message-input');
    inputBox.value = "hello, is there anybody out there?"

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').textContent).toEqual("hello, is there anybody out there?");

  });

  it('hides the message when user clicks the the hide message button', () => {
    const view = new MessageView();

    const showMessageButton = document.querySelector('#show-message-button');
    showMessageButton.click();

    const hideMessageButton = document.querySelector('#hide-message-button');
    hideMessageButton.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});