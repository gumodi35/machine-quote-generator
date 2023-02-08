import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    obtainQuote();
  }, []);

  const obtainQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          text: data.content,
          author: data.author,
        });
      });
  };

  return (
    <div className="App">
      <div id="quote-box" className="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
        <button id="new-quote" onClick={obtainQuote}>
          New Quote
        </button>
        <button>
          <a
            href={
              "https%3a%2f%2ftwitter.com%2fintent%2ftweet%3fhashtags%3dquotes%26related%3dfreecodecamp%26text%3d&v=df9ggewna9e[object%20object]' to include 'twitter.com/intent/tweet'" +
              quote
            }
            id="tweet-quote"
          >
            Tweet
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
