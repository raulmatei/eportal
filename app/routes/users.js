Route = Ember.Route.extend({
  redirect: function(model) {
    this.store.find('user');
  }
});

export default Route;
