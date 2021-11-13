import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <p className="dictionary-paragraph">What do you want to search?</p>
          <input
            type="search"
            onChange={keywordChange}
            placeholder="Enter a word"
          />
        </form>
        <div className="hint">e.g., flower, love, planet, mammoth</div>
      </section>
      <Results results={results} />
    </div>
  );
}
