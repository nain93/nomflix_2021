import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

const TvContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      setTopRated(topRated);
      const {
        data: { results: popular },
      } = await tvApi.popular();
      setPopular(popular);
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      setAiringToday(airingToday);
    } catch {
      setError("Cant find TV information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default TvContainer;
