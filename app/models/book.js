var Book = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  book_type: DS.attr(),
  year: DS.attr(),
  user_id: DS.attr(),
  booked_at: DS.attr('date'),
  return_at: DS.attr('date'),
  status: function(){
    return this.get('user_id') ? 1 : undefined;
  }.property('user_id'),
});

export default Book;
