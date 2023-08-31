let cards = document.querySelector('.cards')
let allCards = document.querySelectorAll('.card')
console.log(allCards)

for (let i = 0; i < 4; i++) {
  let newBox = document.createElement('div')
  newBox.className = 'card'
  newBox.innerText = `Это карта ${allCards.length + 1}`

  //   newBox.style.backgroundColor = 'yellow'
  //   newBox.style.color = 'red'
  newBox.style.cssText = `
    color: red;
    background-color: yellow;
    `
  cards.appendChild(newBox)
  allCards = document.querySelectorAll('.card')
}

let lastBox = document.createElement('div')
lastBox.className = 'card'
lastBox.innerText = `Это карта ${allCards.length + 1}`
lastBox.style.cssText = `
    position: relative;
    `

cards.appendChild(lastBox)

let innerDiv = document.createElement('div')
innerDiv.className = 'innerDiv'
lastBox.appendChild(innerDiv)
innerDiv.innerText = '1'
innerDiv.style.cssText = `
    width: 50px;
    height: 50px;
    background-color: red;
    color: white;

    text-align: center;
    vertical-align: middle;
    line-height: 50px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `
