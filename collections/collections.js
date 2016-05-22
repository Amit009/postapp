// Profile Images collection

ProfileImages = new FS.Collection("ProfileImages", {
	stores:[new FS.Store.GridFS("ProfileImages")]
});


// Add allow Permission for ProfileImages when removing insecure package
ProfileImages.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	download: function () {
		return true;
	}
});

UserImages = new Mongo.Collection("UserImages");

// Posts Collection
Posts = new Mongo.Collection("posts");

// Add allow Permission for Posts when removing insecure package
Posts.allow({
	insert: function (userId, doc) {
		return true;
	}
});

// attach Posts schema :  its simpla posts collection schema 
Posts.attachSchema(new SimpleSchema({
  body: {
    type: String,
    max: 500
  },
  userId: {
    type: String,
    autoValue: function() {
    	return Meteor.userId()
    }
  },
  username: {
    type: String,
    autoValue: function() {
    	return Meteor.users.findOne({_id: this.userId}).username
    }
  },
  createdAt: {
  	type:Date,
  	autoValue:function() {
  		return new Date()
  	}
  }
}));
