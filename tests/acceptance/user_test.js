var App = undefined;

module('User Page', {
  setup: function() {
    App = startApp();

    $.mockjax({
      url: '/api/v1/users/1',
      responseText: {
        users: []
      }
    });

    $.mockjax({
      url: '/api/v1/users/1',
      responseText: {
        user: { id: 1, screenName: 'tom-dale', firstName: 'Tom', lastName: 'Dale', middleName: 'Johnson', gender: 'male', jobTitle: 'Ninja',  emailAddress: 'tomdale@yahoo.com', birthday: '08/03/1950', address: 'Santa Clara, California', phoneNumber: '0587328320', skype: 'TDL', facebook: '/tommydaleh' }
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
    var userPage = $('#user-page'),
        props = userPage.find('li');

    equal(userPage.length, 1);
    console.log(userPage);
    equal(props.eq(0).text().trim(), 'tom-dale');
    // equal($(userPage[1]).text().trim(), 'User #2');
  });
});


