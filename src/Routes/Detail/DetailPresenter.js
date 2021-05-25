import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.span`
  font-size: 32px;
  margin-left: 20px;
`;

const ItemContainer = styled.div`
  font-size: 20px;
  margin: 10px;
  border-bottom: 2px solid gray;
  padding: 10px;
`;

const Item = styled.span`
  margin-bottom: 10px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  margin: 20px;
`;

const Season = styled.div`
  margin: 20px;
  font-size: 20px;
`;

const SeasonContainer = styled.div`
  display: flex;
`;

const SeasonCover = styled.div`
  width: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const SesonBox = styled.div`
  width: 200px;
  height: 300px;
  margin: 20px 0px;
  margin-right: 20px;
`;

function DetailPresenter({ result, loading, error }) {
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <Container>
          {console.log(result)}
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`}
          />
          <Content>
            <Cover
              bgImage={
                result?.poster_path
                  ? `https://image.tmdb.org/t/p/original${result?.poster_path}`
                  : require("../../assets/Missing_Image.jpg").default
              }
            />
            <Data>
              <Title>{result?.original_title || result?.original_name}</Title>
              <ItemContainer>
                <Item>
                  {result?.release_date?.substring(0, 4) ||
                    result?.first_air_date?.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result?.runtime || result?.episode_run_time[0]} min
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result?.genres.map((genre, index) =>
                    index === result?.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
                </Item>
              </ItemContainer>
              <ItemContainer>
                {result?.production_companies.map((item, idx) => (
                  <p key={idx}>{item?.name}</p>
                ))}
                <br />
                <Item>{result?.production_countries[0]?.name}</Item>
              </ItemContainer>

              <Overview>{result?.overview}</Overview>
              {result?.seasons ? (
                <Season>
                  <h1>Seasons</h1>
                  <div>
                    <SeasonContainer>
                      {result?.seasons.map((item, idx) => (
                        <SesonBox key={idx}>
                          <SeasonCover
                            bgImage={
                              result?.poster_path
                                ? `https://image.tmdb.org/t/p/original${result?.poster_path}`
                                : require("../../assets/Missing_Image.jpg")
                                    .default
                            }
                          />
                          <span>{item.name}</span>
                        </SesonBox>
                      ))}
                    </SeasonContainer>
                  </div>
                </Season>
              ) : (
                ""
              )}
            </Data>
          </Content>
        </Container>
      )}
    </>
  );
}

DetailPresenter.prototypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
