import restURIs from '../../../data/restURIs'

const fetchFn = (shouldFail = false) => {
  const url =
    shouldFail === true
      ? restURIs.todos
      : 'https://rest.io/404data'

  return fetch(url).then(async (res) => {
    if (res.ok) {
      return await res.json();
    }
    const err = new Error(res.statusText);
    err.data = await res.json();
    throw err;
  });
};

export default fetchFn