
// onLogin and onLogout from auth-client-callbacks package
if(Meteor.isClient) {
	Accounts.onLogin(function() {
		Router.go('/profile');
	});
	Accounts.onLogout(function() {
		Router.go('/');
	});
}


//default layout template for all routes
Router.configure({
	layoutTemplate:'layout'
});

// Post Home Page Route
Router.route('/', function() {
	this.render('posts');
});

// About Page Route
Router.route('/about', function() {
	this.render('about');
});

// Profile Page Route
Router.route('/profile', function() {
	this.render('profile');
});
