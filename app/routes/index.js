var Route = Ember.Route.extend({
  redirect: function(model) {
    this.transitionTo('users');
  }
});

export default Route;
