const root = document.getElementById("game");
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
function generateRandom(maxLimit = 1008) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}
function fetchPokemon() {
  const pokemonNameUrl =
    "https://pokeapi.co/api/v2/pokemon/" + generateRandom();
  axios
    .get(pokemonNameUrl)
    .then((response) => {
      const pokemonsinfo = response.data;
      const name = pokemonsinfo.name;
      const type = pokemonsinfo.types[0].type.name;
      const picture =
        pokemonsinfo.sprites.other["official-artwork"].front_default;

      const testPokemon = {
        name: name,
        type: type,
        img: picture,
      };
      displayPokemon(testPokemon);
      displayButtons(arrTypes);
      const ansButtons = document.querySelectorAll(".button__type");
      ansButtons.forEach((ansButton) => {
        ansButton.addEventListener("click", (event) => {
          if (event.target.innerText === testPokemon.type.toString()) {
            //////////////test
            alert("wwwwwwwwwwwww"); //winning outcome
          } else {
            alert("lllllllllllll"); //losing outcome
          }
          root.innerHTML = "";
          fetchPokemon();
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
// fetchPokemon();

function displayPokemon(pokemon) {
  const { name, img } = pokemon;
  const image = document.querySelector(".frame__image--image");
  const description = document.querySelector(".text--description");
  image.src = img;
  description.innerText = name;

  //   return `
  //     <div class="cards">
  //       <img class="cards__img" src="${img}"/>
  //       <h2 class="cards__name">${name}</h2>
  //     </div>
  //   `;
}

function displayButtons(arrTypes) {
  for (i in arrTypes) {
    let button = document.createElement("button");
    button.innerHTML = arrTypes[i];
    button.classList.add("button__type"); // class button__type
    button.classList.add("button__type" + "--" + arrTypes[i]); //class button__type--TYPEVALUE
    button.innerText = arrTypes[i];
    root.appendChild(button);
  }
}
