var Route = Ember.Route.extend({
  model: function(model) {
    return this.store.find('user');
  }
});

export default Route;
