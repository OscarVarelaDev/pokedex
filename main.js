let button = document.getElementById("buscar")
var result = ""
var id, height, name = ""
const pokeImg = document.querySelector('[data-poke-img]');

button.addEventListener("click", () => {
    let pokemon = document.getElementById("pokemon").value
    getPokemon(pokemon)

});


document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        let pokemon = document.getElementById("pokemon").value
        getPokemon(pokemon)
    }


})


async function getPokemon(pokemon) {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        const data = await response.json()

        const { id, name, height, stats } = data
        const sprite = data.sprites.front_default

        document.getElementById("mostrarPokemon").innerHTML = name.toUpperCase()
        document.getElementById("datosPokemon").innerText = `Numero de pokedex:${id}`
        document.getElementById("peso").innerText = `Peso:${height}`
        document.getElementById("stat").innerText = `Hp:${stats[0].base_stat}`
 
        pokeImg.setAttribute('src', sprite);



    }
    catch {

        document.getElementById("mostrarPokemon").innerText = "No se encontro pokemon"
        document.getElementById("datosPokemon").innerText = "No hay datos"


    }

}
        

