import React, { useState } from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchByTerm = async () => {
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      setMovieResults(movieResults);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setTvResults(tvResults);
      setLoading(true);
    } catch {
      setError("Can't find results");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm();
    }
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
