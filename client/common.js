
// Subscribe When Auto Publish package Removed
Meteor.subscribe("posts");
Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");


Template.registerHelper('getProfileImg', function(userId) {
	var imgUrl = UserImages.findOne({userId: userId}).image;
	return imgUrl;
})

