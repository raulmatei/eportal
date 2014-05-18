var Message = DS.Model.extend({
  user: DS.belongsTo('user'),
  content: DS.attr('string'),
  createdAt: DS.attr('date')
});

export default Message;
