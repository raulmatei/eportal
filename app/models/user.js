var User = DS.Model.extend({
  fullName: DS.attr(),
  messages: DS.hasMany('message'),
  inventory : DS.hasMany('inventory')
});

export default User;
