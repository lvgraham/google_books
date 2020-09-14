const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist'
);

const bookSeed = [
	{
		title: 'Nine Perfect Strangers',
		author: 'Liane Moriarty',
		description:
			'Nine people gather at a remote health resort. Some are here to lose weight, some are here to get a reboot on life, some are here for reasons they can’t even admit to themselves. Amidst all of the luxury and pampering, the mindfulness and meditation, they know these ten days might involve some real work. But none of them could imagine just how challenging the next ten days are going to be.',
		image: 'https://via.placeholder.com/200',
		link:
			'https://www.google.com/books/edition/Nine_Perfect_Strangers/kIKezAEACAAJ?hl=en',
		date: new Date(Date.now()),
	},
	{
		title: 'Yes Please',
		author: 'Amy Poehler',
		description:
			'In her first book, one of our most beloved funny folk delivers a smart, pointed, and ultimately inspirational read. Full of the comedic skill that makes us all love Amy, Yes Please is a rich and varied collection of stories, lists, poetry (Plastic Surgery Haiku, to be specific), photographs, mantras and advice. With chapters like "Treat Your Career Like a Bad Boyfriend," "Plain Girl Versus the Demon" and "The Robots Will Kill Us All" Yes Please will make you think as much as it will make you laugh. Honest, personal, real, and righteous, Yes Please is full of words to live by.',
		image: 'https://via.placeholder.com/200',
		link:
			'https://www.google.com/books/edition/Yes_Please/5upzAwAAQBAJ?hl=en&gbpv=0',
		date: new Date(Date.now()),
	},
	{
		title: 'Wild',
		author: 'Cheryl Strayed',
		description:
			"At twenty-two, Cheryl Strayed thought she had lost everything. In the wake of her mother's death, her family scattered and her own marriage was soon destroyed. Four years later, with nothing more to lose, she made the most impulsive decision of her life. With no experience or training, driven only by blind will, she would hike more than a thousand miles of the Pacific Crest Trail from the Mojave Desert through California and Oregon to Washington State—and she would do it alone. Told with suspense and style, sparkling with warmth and humor, Wild powerfully captures the terrors and pleasures of one young woman forging ahead against all odds on a journey that maddened, strengthened, and ultimately healed her.",
		image: 'https://via.placeholder.com/200',
		link: 'https://www.google.com/books/edition/Wild/CdtYvZwZUFQC?hl=en&gbpv=0',
		date: new Date(Date.now()),
	},
	{
		title: 'The Girl on the Train',
		author: 'Paula Hawkins',
		description:
			"Rachel takes the same commuter train every morning and night. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She's even started to feel like she knows them. Jess and Jason, she calls them. Their life--as she sees it--is perfect. Not unlike the life she recently lost. And then she sees something shocking. It's only a minute until the train moves on, but it's enough. Now everything's changed. Unable to keep it to herself, Rachel goes to the police. But is she really as unreliable as they say? Soon she is deeply entangled not only in the investigation but in the lives of everyone involved. Has she done more harm than good?",
		image: 'https://via.placeholder.com/200',
		link:
			'https://www.google.com/books/edition/_/07T-jwEACAAJ?sa=X&ved=2ahUKEwicy4XPyufrAhUKeawKHV-WC2YQre8FMB96BAgcEGs',
		date: new Date(Date.now()),
	},
];

db.Book.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
