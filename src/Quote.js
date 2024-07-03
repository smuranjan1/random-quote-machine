import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export function Quote (props) {
    return(
        <>
            <p id="text"> <FontAwesomeIcon icon={faQuoteLeft} /> {props.quote}</p>
            <p id="author">— {props.author}</p>
        </>
    );
}