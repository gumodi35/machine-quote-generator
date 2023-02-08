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
    }

  return (
    <div className="App">
      <div id="quote-box" >
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
        <button id="new-quote"onClick={obtainQuote}>New Quote</button>
        <a href={"https://www.youtube.com/redirect?event=video_description&redir_token=quffluhqazfyywjhnjvylv8wrvbame15cvlsq3zidwxvqxxbq3jtc0tudk5tsezsbfnzcl9hbvnmqvi0slq2qw9zn1ytbtixnufutgjvclzwetrwumrwlte2oeppchbeoulac3dzvep5sldlzly0yjq1y184yunjsnu2ogtwz2hqrnk0rez0qxr0sefjcg93m09fnhbssxfpuq&q=https%3a%2f%2ftwitter.com%2fintent%2ftweet%3fhashtags%3dquotes%26related%3dfreecodecamp%26text%3d&v=df9ggewna9e[object%20object]' to include 'twitter.com/intent/tweet'" + quote} 
        
        id="tweet-quote">Tweet</a>
      </div>
    </div>
  );
}

export default App;
