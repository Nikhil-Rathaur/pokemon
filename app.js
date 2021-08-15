let pokename = document.getElementById('input') ;
let para1 = document.getElementById('para1') ;
let para2 = document.getElementById('para2') ;
let para3 = document.getElementById('para3') ;
let para4 = document.getElementById('para4') ;
let para5 = document.getElementById('para5') ;
const submitbtn = document.getElementById('btn');



// console.log("1111");

submitbtn.addEventListener('click', pokemonData);

function pokemonData() {
        x = pokename.value ;
        let y = 'https://pokeapi.co/api/v2/pokemon/' ;
        let z = y+x;
        // let w = 'https://restcountries.eu/rest/v2/name/afghanistan' ;
    	fetch(z)
		.then(res => res.json())
		.then(data => {
            para1.innerHTML = `<img src=${data.sprites.front_default} />`
			para2.value = `${data.name}`
            para3.value = `${data.id}`
            
            console.log(data);
            // console.log(data[0].capital);
            // console.log(data[0]);
            // console.log(data[0]);
		});
        console.log(`https://restcountries.eu/rest/v2/name/${x}`);
        console.log(z);

}



