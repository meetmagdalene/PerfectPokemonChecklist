var pokemonData = [
  {
	pokedex: 1,
    name: 'Bulbasaur',
    url: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png'
  },
  {
	pokedex: 2,
    name: 'Ivysaur',
    url: 'https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png'
  },
  {
	pokedex: 3,
    name: 'Venusaur',
    url: 'https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png'
  },
];
Template.pokemonList.helpers({
  pokemon: pokemonData
});
