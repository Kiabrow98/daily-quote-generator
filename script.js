document.addEventListener('DOMContentLoaded', function() {
const randomQuote = {
    dailyQuotes: [
        { quotes: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { quotes: "Strive not to be a success, but rather to be of value", author: "Albert Einstein "}
    ]
}
function newQuote() {
    const randomNumber = Math.floor(Math.random() * randomQuote.dailyQuotes.length);
    document.getElementById('quoteDisplay').innerHTML = randomQuote.dailyQuotes[randomNumber].quotes;
    document.getElementById('authorDisplay').innerHTML = randomQuote.dailyQuotes[randomNumber].author;
}
const quoteButton = document.getElementById('newQuoteButton');
quoteButton.addEventListener('click', newQuote);
newQuote();
});