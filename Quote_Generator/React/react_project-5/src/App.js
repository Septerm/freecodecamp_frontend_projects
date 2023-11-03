import './style.css';
import React, { useEffect } from 'react';
import { Quotes } from './QuotesList';
import { Colors } from './QuotesList';


function App() {

  
  function getRandomIndex(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    return randomIndex
  }

  const randomNum1 = getRandomIndex(Quotes);
  const randomNum2 = getRandomIndex(Colors);

  const [quote, setQuote] = React.useState(
        
    {
      color: Colors[randomNum2],
      quote: Quotes[randomNum1].quote,
      autor: Quotes[randomNum1].autor,
      tweet: Quotes[randomNum1].tweet,
      animate: 'newFadeIn'
    }
    )

    function changeQuote () {

      const randomNum1 = getRandomIndex(Quotes)
      const randomNum2 = getRandomIndex(Colors)

      setQuote({
        color: Colors[randomNum2],
        quote: Quotes[randomNum1].quote,
        autor: Quotes[randomNum1].autor,
        tweet: Quotes[randomNum1].tweet,
        animateBg: '',
        animate: ''
      })
    }

    useEffect(()=>{

      setQuote(prequote => ({
        ...prequote,
        animateBg: 'fadeIn2',
        animate: 'newFadeIn'
      }))
    },[quote.animate] )
  
 

  return (
    <div className={quote.animateBg + " container"} style={{backgroundColor: quote.color}} >
        <div id="quote-box">

            <div id="quote" style={{color: quote.color}}>

                <div id="quote-text" className={quote.animate} >{quote.quote}</div>

                <div id="quote-autor" className={quote.animate}>-{quote.autor}</div>

            </div>

            <div id="buttons" >
                <a className={quote.animate + " twitter-share-button"} href={quote.tweet} style={{backgroundColor: quote.color}}>
                   <i className="fa fa-twitter"></i>
                </a>
                <button className={quote.animate +" btn-2"} onClick={changeQuote} style={{backgroundColor: quote.color}}>New Quote</button>
            </div>
            
        </div>
    </div>
  );
}

export default App;
