

let button = document.getElementById('btn');


button.addEventListener('click', yoda => {
    let input = document.getElementById('input').value;


for (let i = 1; i<800; i++) {
    fetch(`https://anapioficeandfire.com/api/characters/${i}`)
    .then(response => {
        return response.json();
    })
.then (character => {
    if (input === character.name) {
        document.getElementById('value').innerText = character.culture;
    } 
})

}

})


