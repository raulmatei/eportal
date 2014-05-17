var initializer = {
  name: 'Fixture Pre-loader',
  after: 'store',
  initialize: function(container, application) {
    var store;
    store = container.lookup('store:main');
    return Ember.keys(requirejs._eak_seen).filter(function(key) {
      return !!key.match(/^app\/models\//) && DS.Model.detect(require(key)['default']);
    }).map(function(key) {
      var type, typeKey;
      type = require(key)['default'];
      typeKey = key.match(/^app\/models\/(.*)/)[1];
      type.FIXTURES = window.ENV.FIXTURES[typeKey];
      if (type.FIXTURES) {
        return store.pushMany(typeKey, type.FIXTURES);
      }
    });
  }
};

export default initializer;
