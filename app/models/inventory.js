var Inventory = DS.Model.extend({
  deviceType: DS.attr(),
  vendor: DS.attr(),
  user: DS.belongsTo('user'),
  bookedAt: DS.attr(),
  returnAt: DS.attr()
});

export default Inventory;