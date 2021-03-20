/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
Array that stores the quotes that are printed to a webpage
*/

let quotes = [

  {
   quote: "Common Sense is that which judges the things given to it by other senses.", 
   source: "Leonardo Da Vinci", 
   year: 1501
  },
  {
    quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", 
    source: "Albert Einstein", 
    year: 1944
   },
   {
    quote: "Physics isn’t the most important thing. Love is.", 
    source: "Richard Feynman", 
    year: 1980,
    tags: " #love #priorities #physics #philosophy"
   },

   {
    quote: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", 
    source: "Daniel J. Boorstin", 
    citation: "The Washington Post", 
    year: 1984
   },
   {
    quote: "A man who dares to waste one hour of time has not discovered the value of life.", 
    source: "Charles Darwin",  
    citation: "The Life & Letters of Charles Darwin", 
    year: 1869
   },
   
];

/*
Function to get a random quote from array of quotes
*/

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  getRandomQuotes = quotes[randomNumber];
  return (getRandomQuotes);
};
getRandomQuote();

/*
Function that prints the quote and updates the HTML 
It also checks if randomly generated quote, has citation, year or tag property
*/

function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}`
  
  if (randomQuote.citation) {
  htmlString += `<span class="citation">${randomQuote.citation}</span>`
  }

  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}, </span>`
  }

  if (randomQuote.tags) {
    htmlString += `<span class="tags">${randomQuote.tags}</span>`
  }

  htmlString += `</p>`

  document.getElementById('quote-box').innerHTML = htmlString; 
}

/*
Interval to print new quote every 5 seconds
*/
setInterval(printQuote, 5000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);