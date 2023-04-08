const quoteText = document.querySelector(".quote");
const author = document.querySelector(".writter");
const twitterBtn = document.querySelector(".twitter");
const nextQuoteBtn = document.querySelector(".nextQuote");

let items=[];

function getDataFromApi(){
    let currentQuote = items[Math.floor(Math.random()*items.length)];
    quoteText.innerText = currentQuote.text;
    author.innerText = currentQuote.author || "a saint";
}
fetchAPI();
async function fetchAPI(){
    let response = await fetch("https://type.fit/api/quotes");
    items= await response.json();
    getDataFromApi(items);
}

nextQuoteBtn.addEventListener("click",()=>{
    getDataFromApi();
})

twitterBtn.addEventListener("click" ,()=>{
    let tweet = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${author.innerText}`;
    window.open(tweet,"_blank");
});


