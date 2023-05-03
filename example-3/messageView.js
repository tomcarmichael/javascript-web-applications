class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    // console.log('Thanks for clicking me!');
    let messageElement = document.createElement('div');
    messageElement.id ='message';
    messageElement.textContent = "A message to you Rudi"
    document.querySelector('body').append(messageElement); 
  }
}

module.exports = MessageView;