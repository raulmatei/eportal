var Route = Ember.Route.extend({
  model: function(model) {
    return this.store.find('message');
  }
});

export default Route;
