import {Quotes}  from "./QuotesList.js" // Brings Quotes object which contains various quotes
import {Colors} from "./QuotesList.js" // Brings in Color array with various colors


function App() {
    
    //Brings in all the elements that that will be dynamic
    const container = document.querySelector(".container")
    const button = document.querySelector(".btn-2");
    const text = document.querySelector("#quote-text");
    const autor = document.querySelector("#quote-autor");
    const background = document.querySelector(".background-color");
    const tweet = document.querySelector(".twitter-share-button");

    //generates a random index for a quote and and a color each time the page is refresh
    const randomNum1 = Math.floor(Math.random()*Quotes.length);
    const randomNum2 = Math.floor(Math.random()*Colors.length);

    // Changes the quote and  quote text color each time the page is refresh
    text.textContent = Quotes[randomNum1].quote;
    text.style.color = Colors[randomNum2];
    
    //Changes the autor name and autor text color each time the page is refresh
    autor.textContent = "-" + Quotes[randomNum1].autor;
    autor.style.color = Colors[randomNum2];

    // Changes the background color and button color each time the page is refresh
    background.style.backgroundColor = Colors[randomNum2];
    button.style.backgroundColor = Colors[randomNum2];

    // Changes the color of the tweet button each time the page is refresh
    tweet.style.backgroundColor = Colors[randomNum2];
    // Adds the href text based on the quote that is curretly being displayed so it can tweeted out
    tweet.href = Quotes[randomNum1].tweet;

    

    button.addEventListener('click', function ani() {

        //generate a random index for a quote and and a color
        const randomNum1 = Math.floor(Math.random()*Quotes.length);
        const randomNum2 = Math.floor(Math.random()*Colors.length);
        

        
        
        // Changes the quote and  quote text color when the button is click
        text.textContent = Quotes[randomNum1].quote;
        text.style.color = Colors[randomNum2];

        //Changes the autor name and autor text color when the button is click
        autor.textContent = "-" + Quotes[randomNum1].autor;
        autor.style.color = Colors[randomNum2];

        //Changes the background color and button color when the button is click
        background.style.backgroundColor = Colors[randomNum2];
        button.style.backgroundColor = Colors[randomNum2];
        // Changes the color of the tweet button when the button is click
        tweet.style.backgroundColor = Colors[randomNum2];
        // Adds the href text based on the quote that is curretly being displayed so it can tweeted out
        tweet.href = Quotes[randomNum1].tweet;

        // Fade In animations 
        text.classList.remove('newFadeIn')
        void text.offsetWidth;
        text.classList.add('newFadeIn')

        autor.classList.remove('newFadeIn')
        void autor.offsetWidth;
        autor.classList.add('newFadeIn')

        button.classList.remove('newFadeIn')
        void button.offsetWidth;
        button.classList.add('newFadeIn')

        tweet.classList.remove('newFadeIn')
        void text.offsetWidth;
        tweet.classList.add('newFadeIn')

        container.classList.remove('fadeIn2')
        void container.offsetWidth;
        container.classList.add('fadeIn2')




    } );

};

// Runs all the dynamic aspects of the app
App()
