import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { createAction, createReducer } from 'redux-act'
import { createSagaWatcher } from 'utilities'

/**
 * Action creators
 */
export const increment = createAction('INCREMENT')
export const requestIncrement = createAction('INCREMENT_REQUESTED')

/**
 * Initial state
 */
const initialState = 0

/**
 * Reducer
 */
export default createReducer({
  [increment]: state => state + 1
}, initialState)

/**
 * Sagas
 */
export const sagas = createSagaWatcher({
  [requestIncrement]: function* (action) {
    yield call(delay, 1000)
    yield put(increment())
  }
})
