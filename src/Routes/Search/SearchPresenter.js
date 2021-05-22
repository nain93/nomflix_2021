import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function SearchPresenter({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
}) {
  return <div>Search</div>;
}

SearchPresenter.prototypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;
