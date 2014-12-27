Events = new Ground.Collection('events');
Meteor.methods({
	'removeAll':function(){
		Events.remove({});
	}
})

Events.remove({});
Events.insert({ title: "Medecine Buddha", start: '2014-12-27', end: '2014-12-27' });
Events.insert({ title: "Guru Rinpoché", start: '2014-12-25', end: '2014-12-25' });
