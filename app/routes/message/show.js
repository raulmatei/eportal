var Route = Ember.Route.extend({
  model: function(params) {
    return this.store.find('show', params.message_id);
  }
});

export default Route;
