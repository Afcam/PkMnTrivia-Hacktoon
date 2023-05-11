// // Axio default base URL
// axios.defaults.baseURL = "https://pokeapi.co/api/v2";

// function generateRandom(maxLimit = 1008) {
//   let rand = Math.random() * maxLimit;
//   return Math.floor(rand);
// }

// let newPokemn = function fetchPokimonsName() {
//   const pokimonsNameUrl = "pokemon/" + generateRandom();
//   axios
//     .get(pokimonsNameUrl)
//     .then((response) => {
//       const pokimonsinfo = response.data;

//       const name = pokimonsinfo.name;
//       const type = pokimonsinfo.types[0].type.name;
//       const picture =
//         pokimonsinfo.sprites.other["official-artwork"].front_default;

//       const pokimon = {
//         name: name,
//         type: type,
//         pic: picture,
//       };
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// generateRandom();

// fetchPokimonsName();
