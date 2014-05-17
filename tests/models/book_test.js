import Book from 'app/models/book';

moduleForModel('book', 'Book model');

test('is valid', function() {
  var book = this.subject({
    title: 'Giving birth for dummies',
    id: 1,
    booked_at: '2014-01-01T00:00:00',
    return_at: '2015-01-01T00:00:00',
  });
  ok(book);
  ok(book instanceof DS.Model);
  ok(book instanceof Book);
  equal(book.get('title'), 'Giving birth for dummies');
  equal(book.get('id'), 1);
  equal(book.get('booked_at'), '2014-01-01T00:00:00');
});

