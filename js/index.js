const url = "https://pokeapi.co/api/v2/pokemon";
const listaPokemon = document.querySelector("#lista-pokemon");

// Funcion para realizar la solicitud al servidor y convertir a formato JSON
function obtenerPokemon(url) {
  fetch(url)
    .then((response) => response.json())
    .then((pokemonData) => {
      mostrarPokemon(pokemonData);
    })
    .catch((error) => console.error("Error al cargar los datos del Pokémon:", error));
}


// Funcion para obtener la lista de Pokemon
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const pokemonLista = data.results
    listaPokemon.innerHTML = ""; 
    pokemonLista.forEach((pokemon) => {
      obtenerPokemon(pokemon.url);
    });
  })
  .catch((error) => console.error("Error al cargar la lista de Pokémon:", error));

  
// Función para mostrar los Pokemon en la lista
function mostrarPokemon(pokemonData) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <p>${pokemonData.name}</p>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
  `;
  listaPokemon.appendChild(listItem);
}