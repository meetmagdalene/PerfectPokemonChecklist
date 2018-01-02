Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('pokemon'); }
});

Router.route('/', {name: 'pokemonList'});
