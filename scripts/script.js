// Random function
const maxNumberOfPokemons = 1008;
const getRandomId = () => Math.floor(Math.random() * maxNumberOfPokemons);

let arrTypes = [
  "normal",
  "fire",
  "water",
  "grass",
  "flying",
  "fighting",
  "poison",
  "electric",
  "ground",
  "rock",
  "psychic",
  "ice",
  "bug",
  "ghost",
  "steel",
  "dragon",
  "dark",
  "fairy",
];
// =================================================================
// AXIOS
// Set the default URL and params for all requests
axios.defaults.baseURL = "https://pokeapi.co/api/v2";

// Get new Pokemon from API server
function getPokemon(pokemonId) {
  return axios.get("/pokemon/" + pokemonId);
}

console.log(getPokemon(getRandomId()));

// =================================================================
// DOM Functions

// Change in DOM the Pokemon Name
function displayPokemonName(name) {
  const span = document.querySelector(".text--name");
  span.innerText = name;
}
// Change in DOM the Pokemon Image
function displayPokemonImage(imageUrl) {
  const img = document.querySelector(".frame__image--image");
  img.src = imageUrl;
}

function createButtonHtml(type) {
  return `
  <button class="button__type">
  ${type}
  </button>
  `;
}
function createMainWrapperHtml(types) {
  let mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main__wrapper");
  types.forEach((type) => {
    let btn = createButtonHtml(type);
    mainWrapper.appendChild(btn);
  });
  return mainWrapper;
}

// Exrtract info drom dataset
function getPokemonInfo(pokemonDataSet) {
  const data = pokemonDataSet.data;
  const name = data.name;
  const type = data.types[0].type.name;
  const img = data.sprites.other["official-artwork"].front_default;

  return { name: name, type: type, img: img };
}

getPokemon(10).then((response) => {
  console.log(response);
});
getPokemon(20).then((response) => {
  console.log(response);
});

function triviaGame() {
  // Root elemnt for GAME
  const game = document.getElementById("main");
  const randomPokemon = getRandomId();
  getPokemon(randomPokemon).then((response) => {
    const info = getPokemonInfo(response);
    displayPokemonImage(info.img);
    displayPokemonName(info.name);
  });
}
triviaGame();

// function fetchPokemon() {
//   const pokemonNameUrl =
//     "https://pokeapi.co/api/v2/pokemon/" + generateRandom();
//   axios
//     .get(pokemonNameUrl)
//     .then((response) => {
//       const pokemonsinfo = response.data;
//       const name = pokemonsinfo.name;
//       const type = pokemonsinfo.types[0].type.name;
//       const picture =
//         pokemonsinfo.sprites.other["official-artwork"].front_default;

//       const testPokemon = {
//         name: name,
//         type: type,
//         img: picture,
//       };
//       displayPokemon(testPokemon);
//       displayButtons(arrTypes);
//       const ansButtons = document.querySelectorAll(".button__type");
//       ansButtons.forEach((ansButton) => {
//         ansButton.addEventListener("click", (event) => {
//           if (event.target.innerText === testPokemon.type.toString()) {
//             //////////////test
//             alert("wwwwwwwwwwwww"); //winning outcome
//           } else {
//             alert("lllllllllllll"); //losing outcome
//           }
//           root.innerHTML = "";
//           fetchPokemon();
//         });
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// // fetchPokemon();

// function displayPokemon(pokemon) {
//   const { name, img } = pokemon;
//   const image = document.querySelector(".frame__image--image");
//   const description = document.querySelector(".text--description");
//   image.src = img;
//   description.innerText = name;

//   //   return `
//   //     <div class="cards">
//   //       <img class="cards__img" src="${img}"/>
//   //       <h2 class="cards__name">${name}</h2>
//   //     </div>
//   //   `;
// }

// function displayButtons(arrTypes) {
//   for (i in arrTypes) {
//     let button = document.createElement("button");
//     button.innerHTML = arrTypes[i];
//     button.classList.add("button__type"); // class button__type
//     button.classList.add("button__type" + "--" + arrTypes[i]); //class button__type--TYPEVALUE
//     button.innerText = arrTypes[i];
//     root.appendChild(button);
//   }
// }

// const { name, img } = pokemon;
// const image = document.querySelector(".frame__image--image");
// const description = document.querySelector(".text--description");
// image.src = img;
// description.innerText = name;

//   return `
//     <div class="cards">
//       <img class="cards__img" src="${img}"/>
//       <h2 class="cards__name">${name}</h2>
//     </div>
//   `;
// }
