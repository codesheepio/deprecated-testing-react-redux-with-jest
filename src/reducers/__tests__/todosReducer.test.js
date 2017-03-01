import todosReducer from '../todosReducer'

describe('todosReducer', () => {
  it('returns correct initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([])
  })
})
