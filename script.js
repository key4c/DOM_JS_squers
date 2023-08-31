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

for (let i = 0; i < allCards.length; i++) {
  allCards[i].style.cssText = `
            position: relative;
            `
  let innerDiv = document.createElement('div')
  innerDiv.className = 'innerDiv'
  allCards[i].appendChild(innerDiv)
  innerDiv.innerText = getNum(allCards[i])
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
}

function getNum(el) {
  let text = el.innerText.trim()
  return text[text.length - 1]
}
