import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 10px;
`;

function HomePresenter({ nowPlaying, popular, upComing, loading, error }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying?.length > 0 && (
            <Section title="Now Playing">
              {nowPlaying.map((movie) => (
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {popular?.length > 0 && (
            <Section title="popular Movies">
              {popular.map((movie) => (
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {upComing?.length > 0 && (
            <Section title="upComing Playing">
              {upComing.map((movie) => (
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
        </Container>
      )}
    </>
  );
}

HomePresenter.prototypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upComing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
