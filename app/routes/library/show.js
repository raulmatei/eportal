var Route = Ember.Route.extend({
  model: function(model) {
    return this.store.find('book');
  }
});

export default Route;
