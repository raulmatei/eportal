var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('users', function() {
    this.route('index');
  });
  this.resource('library', function(){
    this.route('index');
    this.route('show',  {path: '/:book_id'} );
  })
});

export default Router;
