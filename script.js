const quotes = [
  "I think if aliens ever come down and decide who to enslave and who to make partners to learn from, I'm gonna be hauling stone immediately.",
  "If this was the Indian caste system your green texts would mark you as an untouchable.",
  "idk what the point of UPS next day air saver is. There's so much air.",
  "Cream cheese is my Ellis Island.",
  "Let me tell you something: I am strongest in the winter months.",
  "I can't wait for the Christmas party so I can get my Hater of the Year award.",
  "I will happily break rocks in the hot sun while an AI overlord scolds me for not working fast enough as long as I never have to hear 'I don't know where the start menu is' ever again.",
  "I will never retire from my greatest passion of being right.",
  "I think it's insane that you're allowed to legally change your name like it's a vanity plate on a Honda Accord.",
  "If I was famous every single thing I said would be copyrighted marketing material.",
  "I sleep well at night knowing that my brunch of choice of LITs and hollandaise would kill a pilgrim.",
  "I'm a FIERCE defender of all that is Yankee Candle and will not tolerate slander.",
  "Carbs are the point of pizza and are a vital piece of the overall integrity of the end product.",
  "Thin crusted pizza is a cracker with toppings and you can't convince me otherwise.",
  "You guys know that Frank Sinatra song where he sings about New Jersey?",
  "The most important thing for anybody on this earth to know about me is that I'm a hater.",
  "Sometimes life gives you lemons, sometimes it gives you broken glass.",
];

let lastNum = undefined;

function randomNumber() {
  let number = Math.floor(Math.random() * quotes.length);
  return number;
}

function randomQuote() {
  let newRandomNumber = randomNumber();
  while (newRandomNumber == lastNum) {
    newRandomNumber = randomNumber();
  }
  quotation.innerText = `"${quotes[newRandomNumber]}"`;
  lastNum = newRandomNumber;
}

randomQuote();

document.querySelector("button").addEventListener("click", randomQuote);
