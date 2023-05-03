class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    const newPara = document.createElement('p');
    newPara.textContent = text;
    document.querySelector('body').append(newPara);
  }

  removeAllParagraphs() {
    let allParas = document.querySelectorAll('p');
    allParas.forEach((para) => {
      para.remove();
    })
  }
}

module.exports = View;