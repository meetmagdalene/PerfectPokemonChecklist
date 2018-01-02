Template.pokemonList.helpers({
    pokemon: function() {
        return Pokemon.find().fetch();
    }
});
