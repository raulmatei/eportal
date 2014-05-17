var Route = Ember.Route.extend({
  model: function(params) {
    // console.log()
    return this.store.find('book', params.book_id);
  }
});

export default Route;
