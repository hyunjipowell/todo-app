
const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing."
    },
    {
      quote: "Life is what happens when you're busy making other plans."
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page."
    },
    {
      quote: "Life is either a daring adventure or nothing at all."
    },
    {
      quote: "To Travel is to Live"
    },
    {
      quote: "Only a life lived for others is a life worthwhile."
    },
    {
      quote: "You only live once, but if you do it right, once is enough."
    },
    {
      quote: "Never go on trips with anyone you do ntot love."
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment."
    },
    {
      quote: "Travel expands the mind and fills the gap."
    }
  ];
  
const quote = document.querySelector(".info-quote__detail span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
