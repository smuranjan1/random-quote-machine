import { useState } from 'react';
import { TweetButton } from './TweetButton';
import { Quote } from './Quote';
import { colorPalettes } from './constants';
import './QuoteBox.css';

export function QuoteBox(props) {

    const [quote, setQuote] = useState("Be the change that you wish to see in the world.");
    const [author, setAuthor] = useState("Mahatma Gandhi");

    const getQuoteAndChangeColors = async () => {
        const rand = Math.floor(Math.random() * colorPalettes.length)
        var color = colorPalettes[rand];
        document.getElementById("quote-box").style.backgroundColor = color.colors[0];
        document.querySelector("body").style.backgroundColor = color.colors[1];
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
            setQuote(data.content);
            setAuthor(data.author);
        } else {
            console.log("An error occurred");
        }
    }

    return(
        <div id="quote-box">
            <Quote quote={quote} author={author} />
            <div id="button-container">
                <TweetButton quote={quote} author={author} />
                <button id="new-quote" onClick={getQuoteAndChangeColors}>New Quote</button>
            </div>
        </div>
    );
};