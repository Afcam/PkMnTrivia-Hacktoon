// Random function
const maxNumberOfPokemons = 1008;
const getRandomId = () => Math.floor(Math.random() * maxNumberOfPokemons);
const assetsFolder = "./assets/";
const imgFileExtension = ".ico";
const getImage = (img) => assetsFolder + img + imgFileExtension;

let pokemonTypeList = [
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
function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

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
  let imgUrl = getImage(type);
  return `
  <button class="game__button">
  <img class="game__img" src="${imgUrl}"/>
  </button>
  `;
}
function createButtonsHtml(types) {
  let buttons = document.createElement("div");
  buttons.classList.add("game__wrapper");
  for (const type of types) {
    buttons.innerHTML += createButtonHtml(type);
  }
  return buttons;
}

// Exrtract info drom dataset
function getPokemonInfo(pokemonDataSet) {
  const data = pokemonDataSet.data;
  const name = capitalize(data.name);
  const type = data.types[0].type.name;
  const img = data.sprites.other["official-artwork"].front_default;

  return { name: name, type: type, img: img };
}

function createButtonEventListener(btn, type) {
  btn.addEventListener("click", (event) => {
    console.log(event.target.src);
    if (event.target.src.includes(type)) {
      alert("WIN"); //winning outcome
    } else {
      alert("LOSE"); //losing outcome
    }
    // Restart the Game
    triviaGame();
  });
}

function triviaGame() {
  // Root element for GAME
  const game = document.getElementById("game");
  // Clear the game
  game.innerHTML = "";
  const randomPokemon = getRandomId();
  getPokemon(randomPokemon)
    .then((response) => {
      return getPokemonInfo(response);
    })
    .then((info) => {
      const buttons = createButtonsHtml(pokemonTypeList);
      game.appendChild(buttons);
      displayPokemonImage(info.img);
      displayPokemonName(info.name);
      return info.type;
    })
    .then((type) => {
      const allBtn = document.querySelectorAll(".game__button");
      allBtn.forEach((button) => {
        createButtonEventListener(button, type);
      });
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

//   });
// })
// .catch((error) => {
//   console.log(error);
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
