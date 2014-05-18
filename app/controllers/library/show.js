var ShowController = Ember.Controller.extend({
    status: function(){
        return this.get('user_id') ? 'booked' : 'unbooked';
    }.property('user_id'),

    buttonText: function(){
        return this.get('user_id') ? 'unbook it' : 'book it';
    }.property('user_id'),

    actions: {
        book: function() {
            // the current value of the text field
            if( this.get('user_id') ){
                this.set('user_id', undefined);
            } else {
                this.set('user_id', 1);
            }
        }
    }
});

export default ShowController;
