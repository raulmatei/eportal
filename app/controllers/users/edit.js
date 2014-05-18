var EditController = Ember.Controller.extend({

	actions: {
		save: function(){
			var user = this.get('content');
			if (user.get('isValid')) {
				user.save();
			}
		}
	}
});

export default EditController;