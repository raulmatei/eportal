import Message from 'app/models/message';

moduleForModel('message', 'Message model', { needs: [ 'model:user' ] });

test('is valid', function() {
  var message = this.subject({
    content: 'Hello world',
    created_at: '2014-01-01T00:00:00'
  });

  ok(message);
  ok(message instanceof DS.Model);
  ok(message instanceof Message);

  equal(message.get('content'), 'Hello world');
  equal(message.get('created_at'), '2014-01-01T00:00:00');
});
