var Adapter = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1'
});

var FixtureAdapter = DS.FixtureAdapter.extend();

if (window.ENV.development) {
  Adapter = FixtureAdapter;
}

export default Adapter;
