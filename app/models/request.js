var Request = DS.Model.extend({
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  request_type: DS.attr('string'),
  created_at: DS.attr('date'),
  starts_at: DS.attr('date'),
  ends_at: DS.attr('date'),
  accepted: DS.attr('boolean')
});

export default Request;