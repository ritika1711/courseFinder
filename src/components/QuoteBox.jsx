import { useEffect, useState } from "react";

export default function QuoteBox() {
  const [quote, setQuote] = useState("Learning never stops.");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then(res => res.json())
      .then(data => {
        setQuote(data.quote);
      })
      .catch(() => {});
  }, []);

  return (
    <div  className="quote">
      “{quote}”
    </div>
  );
}
