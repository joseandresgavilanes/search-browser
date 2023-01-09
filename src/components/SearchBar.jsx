import React from "react";
import { useState, useCallback, useMemo } from "react";
import Results from "./Results";

const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("mi");
  const [results, setResults] = useState([]);

  function handleOnChange(e) {
    const value = e.target.value;
    setQuery(value);
  }

  function handleResults(items) {
    setResults(items);
  }

  return (
    <div>
      <input type={"text"} onChange={handleOnChange} value={query} />
      {results && <div>{results.length} results</div>}

      <Results
        items={items}
        query={query}
        onItemSelected={onItemSelected}
        onResultsCalculated={handleResults}
      />
    </div>
  );
};

export default SearchBar;
