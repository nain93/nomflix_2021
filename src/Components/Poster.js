import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noImage from "../assets/Missing_Image.jpg";

const Cotainer = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

function Poster({ id, imageUrl, title, rating, year, isMovie = false }) {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Cotainer>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noImage
            }
          />
          <Rating>
            <span role="img" aria-label="rating">
              🌟
            </span>{" "}
            {rating}/10
          </Rating>
        </ImageContainer>
        <Title>
          {title?.length > 20 ? `${title.substring(0, 20)}...` : title}
        </Title>
        <Year>{year}</Year>
      </Cotainer>
    </Link>
  );
}

Poster.prototype = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
