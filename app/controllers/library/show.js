var ShowController = Ember.Controller.extend({
    status: function(){
        return this.get('user_id') ? 'booked' : 'unbooked';
    }.property('user_id'),

    actions: {
        book: function() {
            // the current value of the text field
            this.set('user_id', 1);
    },
        unbook: function(){
            this.set('user_id', undefined);
        }
    }
});

export default ShowController;
