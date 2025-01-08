// src/sagas/rootSaga.js
import { call, put, takeEvery } from "redux-saga/effects";

// Sample API call function
const fetchDataFromAPI = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
};

// Worker Saga: will be fired on FETCH_DATA_REQUESTED actions
function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI); // Calling API using call effect
    console.log("Data: ", data);
    yield put({ type: "data/fetchDataSuccess", payload: data }); // Dispatch failure action
  } catch (error) {
    yield put({ type: "data/fetchDataFailure", payload: error });
  }
}

// Watcher Saga: watches for actions dispatched to the store
function* rootSaga() {
  yield takeEvery("data/fetchDataRequested", fetchDataSaga); // Listen for 'fetchDataRequested' actions
}

export default rootSaga;
