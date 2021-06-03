import fetchFn from './fetchFn'
import useAsyncData from './hook'
import List from '../../../components/List'

//Component using custom hook
const Boilerplate = (props) => {
  // async
  const {
    data,
    isLoading,
    error,
    loadData
  } = useAsyncData({
    fetchFn: (event) => fetchFn(event)
  });

  return (
    <div>
      {/* state isLoading */}
      {
        !isLoading ? (
          <div>
            <button onClick={() => loadData(true)}>Load the data (success)</button>
            <button onClick={() => loadData()}>Load the data (error)</button>
          </div>
        ) : ("Loading...")
      }
      {/* state error */}
      {
        !isLoading && error ? (<div><p>Oh no something went wrong!</p></div>) : null
      }
      {/* state data */}
      { data ? <List posts={data} /> : null }

      {/* state default */}
      { !data && !isLoading ? <div>Nothing here yet</div> : null }
    </div>
  );
};

export default Boilerplate