import React from 'react'
import configureMockStore from 'redux-mock-store' // eslint-disable-line import/no-extraneous-dependencies
import { Provider } from 'react-redux'
import { mount } from 'enzyme' // eslint-disable-line import/no-extraneous-dependencies
import TodoListContainer from '../TodoList'
import TodoList from '../../components/TodoList'
import { mapStateToProps } from '../TodoList'

describe('TodoList Container', () => {
  const createStore = configureMockStore()
  let wrapper

  beforeEach(() => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    const store = createStore(state)
    wrapper = mount(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    ).find(TodoListContainer).find(TodoList)
  })

  it('receives todos props from state', () => {
    expect(wrapper.prop('todos')).toEqual([
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'Drink coffee', complete: true },
    ])
  })

  test('mapStateToProps performs correctly', () => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    const expectedProps = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    expect(mapStateToProps(state)).toEqual(expectedProps)
  })
})
