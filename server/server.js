Events = new Ground.Collection('events');
Meteor.methods({
	'removeAll':function(){
		Events.remove({});
	}
})

Events.remove({});
Events.insert({ title: "Medecine Buddha", start: '2015-01-17', end: '2015-01-17', haircut: true, content: '<img src="img/medecine-buddha.jpg"> Medecine Buddha' });
Events.insert({ title: "Guru Rinpoché",   start: '2015-01-15', end: '2015-01-15', haircut: false, content: '<img src="img/guru-rinpoche.jpg"> Guru Rinpoché' });
