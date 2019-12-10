const quotes = [
    {
        name:'Stephen King',
        quote:'Get busy living or get busy dying.'
    },
    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fal miserablt can acheive greatly.'
    },{
        name: 'Abraham Lincoln',
        quote:"I'm a success today because I had a freind who beleived in me and I didn't have the heart to let him down."
    },
    {
        name: 'Leonardo Da Vinci',
        quote: "It had long since come to my attention that peole of accomplishmeant rarely sat back and let things happen to them.They went put and happene to things."
    },
    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, be.'
    }

]

const quoteBtn = document.querySelector('#quoteBtn')
console.log(quoteBtn);
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}


//const simpleQuotes = [
    //{
        //name: 'author number 1',
        //quote: 'quote number 1'
    //},
    //{
        //name: 'author number 2',
        //quote: 'quote number 2'
    //}
//]