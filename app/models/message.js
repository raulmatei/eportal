var Message = DS.Model.extend({
  userId: DS.attr('number'),
  content: DS.attr('string'),
  createdAt: DS.attr('date')
});

export default Message;
