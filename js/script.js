let quotetext = document.querySelector("#quotetext");
let quotesource = document.querySelector("#quotesource");
let quoteButton = document.querySelector(".quotebutton");

// console.log(quotetext);  
const quotes = {
    data: [
        {
            id: 101,
            q1: "xxx",
            author: "sss"
        },
        {
            id: 102,
            q1: "yyy",
            author: " zzz"
        },
        {
            id: 103,
            q1: "qqq",
            author: "jjj"
        },
        {
            id: 104,
            q1: "oooo",
            author: "pppp"
        },
        {
            id: 105,
            q1: "tttt",
            author: "iiiii"
        }
    ],
    getNewQuote: function() {
        let rand = Math.floor(Math.random() * quotes.data.length)
        quotetext.innerHTML = quotes.data[rand].q1;
        quotesource.innerHTML = quotes.data[rand].author;
        console.log(quotes.data[rand].id);
    }

}


    // getNewQuote: function () {
        // console.log("test");
     //   quotetext.innerHTML = quote.data[Math.floor(Math.random() * quote.data.length)].desc;
       // quotetext.innerHTML = quote.data[Math.floor(Math.random() * quote.data.length)].author;



    //}






