const items = [
"Whatever the mind of man can conceive and believe, it can achieve. Napoleon Hill",

"Strive not to be a success, but rather to be of value. Albert Einstein",

"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.  Robert Frost",

"You miss 100% of the shots you do not take. Wayne Gretzky",

"The most difficult thing is the decision to act, the rest is merely tenacity. Amelia Earhart",

"Every strike brings me closer to the next home run. Babe Ruth",

"Life isn't about getting and having, it's about giving and being. Kevin Kruse",

"The most common way people give up their power is by thinking they don’t have any. Alice Walker",

"Winning isn’t everything, but wanting to win is. Vince Lombardi",

"I am not a product of my circumstances. I am a product of my decisions. Stephen Covey",

"You can never cross the ocean until you have the courage to lose sight of the shore. Christopher Columbus"
];

const random1 = document.getElementById('random');
//const quoteText = document.getElementById('quotetext');


const quote = () => {
    randomGenerated = items[Math.floor(Math.random() * items.length)]
    quotetext.textContent = randomGenerated;
}
random1.addEventListener('click' , quote);



