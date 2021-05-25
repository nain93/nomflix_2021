import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [isMovie, setIsMovie] = useState(pathname.includes("/movie/"));

  const getSearch = useCallback(async () => {
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
    } catch {
      setError("Can't find anything.");
    } finally {
      setLoading(false);
      setResult(result);
    }
  }, [id, isMovie, push]);

  useEffect(() => {
    getSearch();
  }, [getSearch]);

  return (
    <>
      <DetailPresenter result={result} loading={loading} error={error} />
    </>
  );
};

export default DetailContainer;
