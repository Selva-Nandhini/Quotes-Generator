const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector(".btn");

function randomQuote() {
    quoteBtn.innerText = "Loading Quote...."
            fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(result => {
                console.log(result);
                quoteText.innerText = result.content;
                authorName.innerText = result.author;
                quoteBtn.innerText = "New Quote"
            });
}

quoteBtn.addEventListener("click", randomQuote)