import { call, put, takeEvery } from "redux-saga/effects";

const fetchDataFromAPI = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
};

// call() is used to invoke a function (typically a function that returns a promise
// or performs an asynchronous operation) in a saga.

// It is like calling a function, but it allows Redux-Saga to keep track of the execution and
// pause the saga until the promise resolves (or rejects).

// It ensures that asynchronous functions are executed and handled correctly within the saga's flow.
function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI);
    // put()  is used to dispatch an action to the Redux store
    yield put({ type: "data/fetchDataSuccess", payload: data });
  } catch (error) {
    yield put({ type: "data/fetchDataFailure", payload: error });
  }
}

// Watcher Saga: watches for actions dispatched to the store
function* rootSaga() {
  yield takeEvery("data/fetchDataRequested", fetchDataSaga); // Listen for 'fetchDataRequested' actions
}

export default rootSaga;
