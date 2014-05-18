var User = DS.Model.extend({
  title: DS.attr(),
  screenName: DS.attr(),
  emailAddress: DS.attr(),
  firstName: DS.attr(),
  middleName: DS.attr(),
  lastName: DS.attr(),
  gender: DS.attr(),
  jobTitle: DS.attr(),
  birthday: DS.attr(),
  address: DS.attr(),
  phoneNumber: DS.attr(),
  skype: DS.attr(),
  facebook: DS.attr(),
  inventory : DS.hasMany('inventory'),
  messages: DS.hasMany('message'),

  isValid: function () {
      return (
      			Ember.isEmpty(this.get('screenName'))   ||
      			Ember.isEmpty(this.get('emailAddress')) ||
      			Ember.isEmpty(this.get('firstName'))	||
      			Ember.isEmpty(this.get('lastName'))	   
       		) ? false : true;
  }.property('screenName', 'emailAddress', 'firstName', 'lastName'),
});

export default User;
