Meteor.publish('pokemon', function() {
  return Pokemon.find();
});
