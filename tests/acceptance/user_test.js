var App = undefined;

module('User Page', {
  setup: function() {
    App = startApp();

    $.mockjax({
      url: '/api/v1/users/1',
      responseText: {
        user: {
          id: 1,
          screen_name: 'tom-dale',
          first_name: 'Tom',
          last_name: 'Dale',
          middle_name: 'Johnson',
          gender: 'male',
          job_title: 'Ninja',
          email_address: 'tomdale@yahoo.com',
          birthday: '08/03/1950',
          address: 'Santa Clara, California',
          phone_number: '0587328320',
          skype: 'TDL',
          facebook: '/tommydaleh'
        }
      }
    });
  },

  teardown: function() {
    $.mockjaxClear();
    Ember.run(App, 'destroy');
  }
});

test('index renders available users', function() {
  visit('/users/1').then(function() {
    var userFields = find('#user-page li span');

    equal(userFields.length, 12);
    equal($(userFields[0]).text().trim(), 'tom-dale');
  });
});


