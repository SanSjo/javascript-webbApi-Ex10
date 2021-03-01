const fetchBtn = document.querySelector('#button');
const getCard = document.querySelector('#cardResult');

function getApi() {

    let fullURi = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
    
    fetch(fullURi)
    .then(res => res.json())
    .then(data => {
        console.log(data)
            let createImage = document.createElement('IMG');
            createImage.setAttribute('src', `${data.cards[0].image}`)
            let getDiv = document.querySelector('div');
            getDiv.appendChild(createImage)
           
            
           
       console.log(data.cards[0].image)
    })
    document.querySelector('div').innerHTML = "";
}

fetchBtn.addEventListener('click', getApi);