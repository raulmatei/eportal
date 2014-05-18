import User from 'app/models/building';

moduleForModel('building', 'Building model');

test('is valid', function() {
  var building = this.subject({
    name: 'Alpha',
    address: 'Calea Turzii 110'
  });

  ok(building);
  ok(building instanceof DS.Model);
  equal(building.get('name'), 'Alpha');
  equal(building.get('address'), 'Calea Turzii 110');
});
