const url = "https://pokeapi.co/api/v2/pokemon";
const listaPokemon = document.querySelector("#lista-pokemon");

// funcion para cargar los pokemon en la lista
function mostrarPokemon(pokemonData) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <p>${pokemonData.name}</p>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
  `;
  listaPokemon.appendChild(listItem);
}

// funcion para obtener los pokemon y mostrarlos
function obtenerListaPokemon() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const pokemonLista = data.results;
      listaPokemon.innerHTML = "";
      pokemonLista.forEach((pokemon) => {
        obtenerPokemon(pokemon.url);
      });
    })
    .catch((error) => console.error("Error al cargar la lista de Pokémon:", error));
}


// realizamos solicitud al servidor y convertimos en formato JSON
function obtenerPokemon(pokemonUrl) {
  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((pokemonData) => {
      mostrarPokemon(pokemonData);
    })
    .catch((error) => console.error("Error al cargar los datos del Pokémon:", error));
}


obtenerListaPokemon();
