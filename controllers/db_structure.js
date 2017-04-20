/* db structure
	User
		id
		name
		feedback
			scenario
			success
			explain
			potential
			comments
*/

/*
// enter mongodb
mongo

// select database (main_db)
use main_db

// create collection (all_feedback)
db.all_feedback.insert([
	{
		name: 'testuser1',
		feedback: [
		  {
				scenario: '1',
				success: 'It all worked',
				explain: 'I have not tried the scenarios yet',
				potential: 'Yes - I see the potential',
				comments: 'I have no comments',
		  },
		  {
				scenario: '2',
				success: 'None of it worked',
				explain: 'no clue what happened',
				potential: 'No - I cannot see the potential',
				comments: 'Hmm',
		  }
		]
	},
	{
		name: 'testuser2',
		feedback: [
		  {
				scenario: '3',
				success: 'Some of it',
				explain: 'Ikasdafsbga',
				potential: 'No - I cannot see the potential',
				comments: 'Whatever',
		  },
		  {
				scenario: '1',
				success: 'Some of it',
				explain: 'Ikasdafsbga',
				potential: 'Yes - I see the potential',
				comments: 'No comments',
		  }
		]
	}
])


use main_db
*/


// insert feedback data into user feedback
db.all_feedback.update(
	{name: 'testuser1'}, 
	{$push: {'feedback': {
		scenario: '2',
		success: 'MORE NEW STUFF',
		explain: 'asdfsuccess',
		potential: 'sdfwooo',
		comments: 'nasdfice',
	}}}
)

/*
// return values of specific field
db.all_feedback.find({},{"feedback.success":1}).pretty()

// counts the number of docs in collection (names in all_feedback)
db.all_feedback.find({},{"feedback.success":1}).count()
*/