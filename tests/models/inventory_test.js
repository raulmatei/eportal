import Inventory from 'app/models/inventory';

moduleForModel('inventory', 'Inventory model', {

  // specify the other units that are required for this test
  needs: [
    'model:user'
  ]}
);
test('is valid', function() {
  var inventory = this.subject({
    vendor: 'Vendor'
  });
  ok(inventory);
  ok(inventory instanceof DS.Model);
  ok(inventory instanceof Inventory);
  equal(inventory.get('vendor'), 'Vendor');
});
