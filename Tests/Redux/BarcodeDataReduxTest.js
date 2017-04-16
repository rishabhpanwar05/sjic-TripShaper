import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/BarcodeDataRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.barcodeDataRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.barcodeDataSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.barcodeDataFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
