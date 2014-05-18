var Route = Ember.Route.extend({
  model: function(params) {
    // console.log()
    return this.store.find('inventory', params.inventory_id);
  }
});

export default Route;
