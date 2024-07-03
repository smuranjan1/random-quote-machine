import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export function Quote (props) {
    return(
        <>
            <p id="text"> 
                <span id="icon-wrapper">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                {props.quote}
                <span id="icon-wrapper">
                    <FontAwesomeIcon icon={faQuoteRight} />
                </span>
            </p>
            <p id="author">— {props.author}</p>
        </>
    );
}