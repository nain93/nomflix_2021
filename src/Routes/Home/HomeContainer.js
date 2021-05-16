import React, { useCallback, useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upComing, setUpComing] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const nowPlayingFn = async () => {
        const nowPlaying = await moviesApi.nowPlaying();
        setNowPlaying(nowPlaying);
      };
      nowPlayingFn();
      console.log(nowPlaying);
    } catch {
      setError("Cant find movies information");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upComing={upComing}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};

export default HomeContainer;
