var App = undefined;

module('Users Page', {
  setup: function() {
    App = startApp();

    $.mockjax({
      url: '/api/v1/users',
      responseText: {
        users: [
          {
            id: 'USR_1',
            full_name: 'User #1'
          }, {
            id: 'USR_2',
            full_name: 'User #2'
          }
        ]
      }
    });
  },

  teardown: function() {
    $.mockjaxClear();
    Ember.run(App, 'destroy');
  }
});

test('index renders available users', function() {
  visit('/users/index').then(function() {
    var listing;
    listing = find('.users-list li');
    equal(listing.length, 2);
    equal($(listing[0]).text().trim(), 'User #1');
    equal($(listing[1]).text().trim(), 'User #2');
  });
});
