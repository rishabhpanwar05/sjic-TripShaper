import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/ParseSendRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.parseSendRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.parseSendSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.parseSendFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
