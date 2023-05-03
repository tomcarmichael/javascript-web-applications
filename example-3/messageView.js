class MessageView {
  constructor() {
    this.showMessageButton = document.querySelector('#show-message-button');

    this.showMessageButton.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideMessageButton = document.querySelector('#hide-message-button');

    this.hideMessageButton.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    // console.log('Thanks for clicking me!');
    let messageElement = document.createElement('div');
    messageElement.id ='message';
    messageElement.textContent = "A message to you Rudi"
    document.querySelector('body').append(messageElement); 
  }

  hideMessage() {
    const message = document.querySelector('#message');
    message.remove();
  }
}

module.exports = MessageView;