
//button clicked 
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}

//display fetch data

const displayQuotes = quote => {
    // console.log(quote)
    const blockQuotes = document.getElementById("quote");
    blockQuotes.innerText = quote.quote;
}