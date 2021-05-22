import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 10px;
`;

function TvPresenter({ topRated, popular, airingToday, loading, error }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated?.length > 0 && (
            <Section title="Top Rated shows">
              {topRated.map((show) => show.name)}
            </Section>
          )}
          {popular?.length > 0 && (
            <Section title="popular shows">
              {popular.map((show) => show.name)}
            </Section>
          )}
          {airingToday?.length > 0 && (
            <Section title="airingToday shows">
              {airingToday.map((show) => show.name)}
            </Section>
          )}
        </Container>
      )}
    </>
  );
}

TvPresenter.prototypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TvPresenter;
