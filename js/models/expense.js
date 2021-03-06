App.Expense = DS.Model.extend({
	date: DS.attr('date'),
	description: DS.attr('string'),
	payer: DS.belongsTo('person'),
	amount: DS.attr('number'),
	payees: DS.hasMany('person', {async: true})
});

App.Expense.FIXTURES = [

  {
     id: 1,
     date: '2013-10-30',
     description: 'pizza',
     payer: 1,
     amount: 400,
     payees: [1, 2, 3, 4]
  },

  {
     id: 2,
     date: '2013-11-14',
     description: 'laundry',
     payer: 2,
     amount: 800,
     payees: [1, 2, 3, 4]
  },

  {
     id: 3,
     date: '2014-01-03',
     description: 'bus travel',
     payer: 3,
     amount: 600,
     payees: [1, 2, 3, 4]
  },

  {
     id: 4,
     date: '2014-03-26',
     description: 'movie',
     payer: 4,
     amount: 1200,
     payees: [1, 2, 3, 4]
  }

];
