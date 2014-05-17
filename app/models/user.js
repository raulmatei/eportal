var User = DS.Model.extend({
  fullName: DS.attr(),
  messages: DS.hasMany('message')
});

export default User;
