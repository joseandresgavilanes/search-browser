import React from "react";
import { useState, useCallback, useMemo } from "react";
import Results from "./Results";
import "../styles/SearchBar.css";

const SearchBar = ({
  items,
  onItemSelected,
  people,
  calendar,
  emails,
  setData,
  setCurrentOption,
}) => {
  const [query, setQuery] = useState("a");
  const [results, setResults] = useState([]);

  function handleOnChange(e) {
    const value = e.target.value;
    setQuery(value);
  }

  function handleResults(items) {
    setResults(items);
  }

  function handleClick(e) {
    const location = e.target.name;

    switch (location) {
      case "all":
        setData([...people, ...emails, ...calendar]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
    }
  }

  return (
    <div className="searchBar_container">
      <div className="searchBar_container_bar">
        <img
          className="searchBar_container_bar_img"
          src="./logoDark.png"
          alt=""
        />

        <div
          class="searchbar searchbar2"
          style={{
            backgroundColor: "#303134",
            borderColor: "#303134",
            color: "white",
          }}
        >
          <div class="searchbar-wrapper">
            <div class="searchbar-left">
              <div class="search-icon-wrapper"></div>
            </div>

            <div class="searchbar-center">
              <div class="searchbar-input-spacer"></div>

              <input
                style={{ color: "white" }}
                onChange={handleOnChange}
                value={query}
                type="text"
                class="searchbar-input"
                maxlength="2048"
                name="q"
                autocapitalize="off"
                autocomplete="off"
                title="Search"
                role="combobox"
              />
            </div>

            <div class="searchbar-right">
              <svg
                class="voice-search"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
            </div>
            <div class="searchbar-left">
              <div class="search-icon-wrapper">
                <span class="search-icon searchbar-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchBar_container_categories">
        <button
          className="searchBar_container_categories_btn"
          name="all"
          onClick={handleClick}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>All</p>
        </button>
        <button
          className="searchBar_container_categories_btn"
          name="emails"
          onClick={handleClick}
        >
          <i class="fa-solid fa-envelope"></i>
          Emails
        </button>
        <button
          className="searchBar_container_categories_btn"
          name="calendar"
          onClick={handleClick}
        >
          <i class="fa-solid fa-calendar-days"></i>
          Calendar
        </button>
        <button
          className="searchBar_container_categories_btn"
          name="people"
          onClick={handleClick}
        >
          <i class="fa-solid fa-user"></i>
          People
        </button>
      </div>
      <div className="search_line"></div>
      {results && (
        <div className="results_number">
          {" "}
          About {results.length} results (0.30 seconds)
        </div>
      )}

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
