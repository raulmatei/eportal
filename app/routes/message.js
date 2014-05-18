var Route = Ember.Route.extend({
  model: function(model) {
    return this.store.find('show');
  }
});

export default Route;
