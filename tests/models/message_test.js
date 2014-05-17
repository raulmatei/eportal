import Message from 'app/models/message';

moduleForModel('message', 'Message model');

test('is valid', function() {
  var message = this.subject({
    content: 'Hello world',
    user_id: 1,
    created_at: '2014-01-01T00:00:00'
  });
  ok(message);
  ok(message instanceof DS.Model);
  ok(message instanceof Message);
  equal(message.get('content'), 'Hello world');
  equal(message.get('user_id'), 1);
  equal(message.get('created_at'), '2014-01-01T00:00:00');
});
