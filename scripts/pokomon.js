import service from "./service.js";
service.getPokemon('stench').then( (ability) => {
    
    const pokemonContainer = document.querySelector('.pokemon-container');

    console.log('pokemon', ability)

    if(pokemonContainer) {
    pokemonContainer.innerHTML = `<div>

        <h1>${ability.name}</h1>
        <ol class="pokemon">
            
        ${ability.pokemon.map( (poke) => {

            return `<li>${poke.pokemon.name}</li>`

        }).join(' ')}

            
        
        </ol>
    </div>`
   
    }
})