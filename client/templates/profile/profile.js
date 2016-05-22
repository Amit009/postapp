Template.profile.events({
	'submit .edit-profile': function (event) {
		// upload image

		var file = $('#profileImage').get(0).files[0];
		
		if (file) {
			fsFile = new FS.File(file);

			ProfileImages.insert(fsFile, function(err, result){
				if (err) {
					throw new Meteor.Error(err);
				} else {

					var imageLoc = '/cfs/files/ProfileImages/'+result._id;

					UserImages.insert({
						userId:Meteor.userId(),
						username:Meteor.user().username,
						image:imageLoc
					});

					Router.go('/');
				}
			});
		}
		return false; 
	}
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
});