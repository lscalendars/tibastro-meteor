Events = new Ground.Collection('events');

Router.map(function () {
  this.route('home', {
    path: '/',
  });
	this.route('calendar');
});

if (Meteor.isClient) {
	Template.navbar.helpers({
	  activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute && template === currentRoute.route.getName() ? 'active' : '';
    }
	});
	Template.calendar.helpers({
    calendarOptions: {
      // Standard fullcalendar options
      height: 700,
      hiddenDays: [ 0 ],
      slotDuration: '01:00:00',
      minTime: '08:00:00',
      maxTime: '19:00:00',
      lang: 'fr',
      // Function providing events reactive computation for fullcalendar plugin
      events: function(start, end, timezone, callback) {
	        var events = [];
	      calEvents = Events.find();
	      calEvents.forEach(function(evt){
	        events.push({id:evt._id,title:evt.title,start:evt.start,end:evt.end});
	      })
	      callback(events);
      },
      // Optional: id of the calendar
      id: "calendar1",
      // Optional: Additional classes to apply to the calendar
      addedClasses: "col-md-8",
      // Optional: Additional functions to apply after each reactive events computation
      autoruns: [
        function () {
          console.log("user defined autorun function executed!");
        }
      ]
    },
  });
}
