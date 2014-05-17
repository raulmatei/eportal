var User = DS.Model.extend({
  fullName: DS.attr(),
  inventory : DS.hasMany('inventory')
});

export default User;
