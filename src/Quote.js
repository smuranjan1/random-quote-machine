import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export function Quote (props) {
    return(
        <>
            <p id="text"> 
                <span className="icon-wrapper" >
                    <FontAwesomeIcon icon={faQuoteLeft}  className="quote-icon"/>
                </span>
                {props.quote}
                <span className="icon-wrapper" >
                    <FontAwesomeIcon icon={faQuoteRight}  className="quote-icon"/>
                </span>
            </p>
            <p id="author">— {props.author}</p>
        </>
    );
}