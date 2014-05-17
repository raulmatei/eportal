import Application from 'app/app';
import Router from 'app/router';

var startApp = function(attrs) {
  var App, attributes;
  App = void 0;
  attributes = Ember.merge({
    rootElement: "#ember-testing",
    LOG_ACTIVE_GENERATION: false,
    LOG_VIEW_LOOKUPS: false
  }, attrs);
  Router.reopen({
    location: 'none'
  });
  Ember.run.join(function() {
    App = Application.create(attributes);
    App.setupForTesting();
    return App.injectTestHelpers();
  });
  App.reset();
  return App;
};

export default startApp;
