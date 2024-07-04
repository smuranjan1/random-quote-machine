export function TweetButton(props) {
   return(
    <a id="tweet-quote" className="primary-button"
    href={`https://twitter.com/intent/tweet?text="${props.quote}" ${props.author}`} 
    target="_blank">
      <div id="tweet-text">Tweet</div>
   </a>
   );
}