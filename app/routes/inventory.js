var Route = Ember.Route.extend({
  model: function(model) {
    return this.store.find('inventory');
  }
});

export default Route;
