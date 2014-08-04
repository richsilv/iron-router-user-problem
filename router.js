var LOGGED_IN_ROUTES = ['loggedIn1', 'loggedIn2'];

Router.configure({

  layoutTemplate: 'layout',

  onBeforeAction: function(pause) {

  	var thisUser = Meteor.user(),
  		thisRoute = Router.current() ? Router.current().route.name : null;

  	console.log("Checking route for ", thisUser, thisRoute);

  	if (thisRoute && thisUser && LOGGED_IN_ROUTES.indexOf(thisRoute) === -1)
  		this.redirect('loggedIn1');

  	else if (thisRoute && !thisUser && LOGGED_IN_ROUTES.indexOf(thisRoute) > -1)
  		this.redirect('notLoggedIn1');

  }

});

Router.map(function () {

  this.route('notLoggedIn1', {template: 'notLoggedIn1'});

  this.route('notLoggedIn2', {template: 'notLoggedIn2'});

  this.route('loggedIn1', {template: 'loggedIn1'});

  this.route('loggedIn2', {template: 'loggedIn2'});

});