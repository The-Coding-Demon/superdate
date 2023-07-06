import { useState, useEffect, useCallback, useRef } from "react";
import useUpdateEffect from "./useUpdateEffect";

export function useFetchGet(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (abortController) => {
      try {
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    },
    [url, options]
  );

  useEffect(() => {
    const abortController = new AbortController();
    sendRequest(abortController);
    return () => {
      abortController.abort();
    };
  }, [sendRequest]);

  return { data, loading, error };
}

export function useFetchGetFn() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(new AbortController());

  const sendRequest = useCallback(
    async (url, options = {}) => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        localStorage.setItem("apiResult", JSON.stringify(data.results));
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        if (!abortControllerRef.current.signal.aborted) {
          setLoading(false);
        }
      }
    },
    [abortControllerRef.current]
  );

  useUpdateEffect(() => {
    abortControllerRef.current = new AbortController();
    return () => {
      abortControllerRef.current.abort();
    };
  }, []);

  return { data, loading, error, sendRequest };
}
