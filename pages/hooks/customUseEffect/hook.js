import { useState, useEffect } from "react";

// Options:
// fetchFn (required): the function to execute to get data
// loadOnMount (opt): load the data on component mount
// clearDataOnLoad (opt): clear old data on new load regardless of success state
// 'Roro' argument pattern: https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/

const useAsyncData = ({
  loadOnMount = false,
  clearDataOnLoad = false,
  fetchFn = null,
} = {}) => {
  // states
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // A function to handle all the data fetching logic
  const loadData = async (event) => {
    setIsLoading(true)
    setError()

    if (clearDataOnLoad === true) {
      setData();
    }

    try {
      const res = await fetchFn(event);
      setData(res);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  };

  // 'onMount'
  // maybe load the data if required
  useEffect(() => {
    if (loadOnMount && fetchFn !== null) loadData();
  }, []);

  // Return the state and the load function to the component
  return { data, isLoading, error, loadData };
};
export default useAsyncData;
