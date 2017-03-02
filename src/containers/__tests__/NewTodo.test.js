import React from 'react'
import configureMockStore from 'redux-mock-store' // eslint-disable-line
import { Provider } from 'react-redux'
import { mount } from 'enzyme' // eslint-disable-line
import NewTodoContainer from '../NewTodo'
import NewTodo from '../../components/NewTodo'
import { ADD_TODO } from '../../actions/types'

describe('NewTodo Container', () => {
  const createStore = configureMockStore()
  let wrapper
  let store

  beforeEach(() => {
    const state = { todos: [] }
    store = createStore(state)
    wrapper = mount(
      <Provider store={store}>
        <NewTodoContainer />
      </Provider>
    ).find(NewTodoContainer).find(NewTodo)
  })

  it('dispatches ADD_TODO action via props.addTodo', () => {
    expect(typeof wrapper.prop('addTodo')).toBe('function')

    wrapper.props().addTodo('Hello')
    const actions = store.getActions()
    const expectedAction = {
      type: ADD_TODO,
      payload: { text: 'Hello' },
    }
    expect(actions).toEqual([expectedAction])
  })
})
