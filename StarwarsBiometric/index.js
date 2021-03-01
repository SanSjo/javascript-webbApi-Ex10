const fetchBtn = document.querySelector('#button');
const getResult = document.querySelector('#textResult');

function getApi() {

    let inputValue = document.querySelector('#input').value;
    console.log(inputValue)
    let fullURi = `https://www.swapi.tech/api/people/?name=${inputValue}`
    console.log(inputValue)
    fetch(fullURi)
    .then(res => res.json())
    .then(data => {
        
        if(inputValue.length === 0 || inputValue === undefined) {
            getResult.innerHTML = "Wrong input try again"
        } else {
            getResult.innerHTML = `Name: ${data.result[0].properties.name} is a ${data.result[0].properties.gender} with a mass of ${data.result[0].properties.mass}, is ${data.result[0].properties.height} cm long and has ${data.result[0].properties.hair_color} hair color`;
        }
        document.querySelector('#input').value = '';
    })
    .catch(error => {

        console.log(error, "wrong input");
    })
   
    
}



fetchBtn.addEventListener('click', getApi);