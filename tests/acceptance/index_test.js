var App = undefined;

module('Homepage', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    $.mockjaxClear();
    Ember.run(App, 'destroy');
  }
});

test('index redirects to users page', function() {
  $.mockjax({
    url: '/api/v1/users',
    responseText: {
      users: []
    }
  });

  visit('/').then(function() {
    var title = find('a.navbar-brand');
    equal(title.text(), 'Broccoli');
    equal(currentURL(), '/users/index');
  });
});
