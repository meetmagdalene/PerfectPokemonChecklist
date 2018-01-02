
// Number of Pokemon to populate
var numMons = 384;

if (Pokemon.find().count() == 0) {

    console.log("Loading Pokemon...");
    for (index = 151; index <= 200; index++) {

      console.log("Pokedex entry #" + index);
      var response = HTTP.call('GET', 'http://pokeapi.co/api/v2/pokemon/' + index + '/');

        if (response.statusCode == 200) {

            data = response.data;
            console.log("Adding " + data.name + " to the database");

            var confirm = Pokemon.insert({
                id: index,
                name: data.name,
                image_url: data.sprites.front_default,
            });
            console.log("Insert Id: " + confirm);

        } else {

            console.log("Could not complete API call.");
            console.error("ERROR: " + response.statusCode);
        }
    }

} else {

    count = Pokemon.find().count();
    console.log("There are already " + count + " Pokemon in the database.")
}
