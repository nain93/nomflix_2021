import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upComing, setUpComing] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      setNowPlaying(nowPlaying);
      const {
        data: { results: upcoming },
      } = await moviesApi.upComing();
      setUpComing(upcoming);
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      setPopular(popular);
    } catch {
      setError("Cant find movie information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default HomeContainer;
