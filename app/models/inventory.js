var Inventory = DS.Model.extend({
  deviceType: DS.attr(),
  vendor: DS.attr(),
  userId: DS.attr(),
  bookedAt: DS.attr(),
  returnAt: DS.attr()
});

export default Inventory;