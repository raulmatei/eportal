var Route = Ember.Route.extend({
  model: function(params) {
    return this.store.find('book', params.book_id);
  }
});

export default Route;
