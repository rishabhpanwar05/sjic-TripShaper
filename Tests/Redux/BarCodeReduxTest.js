import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/BarCodeRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.barCodeRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.barCodeSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.barCodeFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
