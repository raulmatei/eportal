var App = undefined;

module('Users Page', {
  setup: function() {
    App = startApp();

    $.mockjax({
      url: '/api/v1/users',
      responseText: {
        users: [
          {
            id: '1',
            screen_name: 'tom-dale'
          }, {
            id: '2',
            screen_name: 'andrei-dale'
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
    equal($(listing[0]).text().trim(), 'tom-dale');
    equal($(listing[1]).text().trim(), 'andrei-dale');
  });
});
