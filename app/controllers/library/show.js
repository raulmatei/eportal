var ShowController = Ember.Controller.extend({
    actions: {
        book: function() {
            if( this.get('content.user_id') ){
                this.set('content.user_id', undefined);
            } else {
                this.set('content.user_id', 1);
            }
        }
    }
});

export default ShowController;
