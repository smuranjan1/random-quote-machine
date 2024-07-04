import { useState } from 'react';
import { TweetButton } from './TweetButton';
import { Quote } from './Quote';
import { colorSchemes } from './constants';
import './QuoteBox.css';

export function QuoteBox(props) {

    const [quote, setQuote] = useState("Be the change that you wish to see in the world.");
    const [author, setAuthor] = useState("Mahatma Gandhi");
    const [colorIndex, setColorIndex] = useState(0)

    const setColors = () => {
        setColorIndex(colorIndex === 10 ? 0 : colorIndex + 1);
        const colorScheme = colorSchemes[colorIndex]
        document.getElementById("quote-box").style.backgroundColor = colorScheme.lighterColor;
        document.querySelector("body").style.backgroundColor = colorScheme.color;
        Array.from(document.getElementsByClassName("quote-icon")).forEach(el => el.style.color = colorScheme.color);
        Array.from(document.getElementsByClassName("primary-button")).forEach(el => {
            el.style.backgroundColor = colorScheme.color;
            el.style.color = colorScheme.textColor;
        });

    }

    const getQuoteAndChangeColors = async () => {
        setColors();
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
                <button id="new-quote" className="primary-button" onClick={getQuoteAndChangeColors}>New Quote</button>
            </div>
        </div>
    );
};