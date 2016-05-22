import { Meteor } from 'meteor/meteor';


// Publish When Auto Publish package Removed
Meteor.publish("posts", function() {
	return Posts.find();
});
Meteor.publish("ProfileImages", function() {
	return ProfileImages.find();
});
Meteor.publish("UserImages", function() {
	return UserImages.find();
});



Meteor.startup(() => {
  // code to run on server at startup
});
