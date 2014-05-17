var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('users', function() {
    this.route('index');
    this.route('show', {path: '/show?id='+this.id }  );
  })
  this.resource('requests');
});

export default Router;
