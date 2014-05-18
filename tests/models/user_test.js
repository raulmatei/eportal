import User from 'app/models/user';

moduleForModel('user', 'User model');

test('is valid', function() {
  var user = this.subject({
    screenName: 'test',
    emailAddress: 'test@test',
    firstName: 'test',
    lastName: 'test'
  });
  ok(user);
  ok(user instanceof DS.Model);
  ok(user instanceof User);
  equal(user.get('isValid'), true);
  equal(user.get('screenName'), 'test');
});

test('is not valid', function(){
	var user = this.subject({
		screenName: 'test'
	});

	equal(user.get('isValid'), false);
});
