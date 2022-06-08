const quotes = [
	{
		"quote" : "I think if aliens ever come down and decide who to enslave and who to make partners to learn from, I'm gonna be hauling stone immediately."
	},
	{
		"quote" : "If this was the Indian caste system your green texts would mark you as an untouchable."
	},
	{
		"quote" : "idk what the point of UPS next day air saver is. There's so much air."
	},
	{
		"quote" : "Cream cheese is my Ellis Island."
	},
	{
		"quote" : "Let me tell you something: I am strongest in the winter months."
	},
	{
		"quote" : "I can't wait for the Christmas party so I can get my Hater of the Year award."
	},
	{
		"quote" : "I will happily break rocks in the hot sun while an AI overlord scolds me for not working fast enough as long as I never have to hear 'I don't know where the start menu is' ever again."
	},
	{
		"quote" : "I will never retire from my greatest passion of being right."
	},
	{
		"quote" : "I think it's insane that you're allowed to legally change your name like it's a vanity plate on a Honda Accord."
	},
	{
		"quote" : "If I was famous every single thing I said would be copyrighted marketing material."
	},
	{
		"quote" : "I sleep well at night knowing that my brunch of choice of LITs and hollandaise would kill a pilgrim."
	},
	{
		"quote" : "I'm a FIERCE defender of all that is Yankee Candle and will not tolerate slander."
	},
	{
		"quote" : "Carbs are the point of pizza and are a vital piece of the overall integrity of the end product."
	},
	{
		"quote" : "Thin crusted pizza is a cracker with toppings and you can't convince me otherwise."
	},
	{
		"quote" : "You guys know that Frank Sinatra song where he sings about New Jersey?"
	},
	{
		"quote" : "The most important thing for anybody on this earth to know about me is that I'm a hater."
	},
	{
		"quote" : "Sometimes life gives you lemons, sometimes it gives you broken glass."
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `"${random.quote}"`;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)