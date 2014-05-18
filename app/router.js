var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('users', function() {
    this.route('index');
    this.route('show', {path: ':user_id'});
  });

  this.resource('library', function(){
    this.route('index');
    this.route('show',  {path: '/:book_id'} );
  });

  this.resource('inventory', function(){
    this.route('index');
    this.route('show',  {path: '/:inventory_id'} );
  })

  this.resource('message', function () {
    // this.route('index');
    this.route('show');
  });
  
});

export default Router;
