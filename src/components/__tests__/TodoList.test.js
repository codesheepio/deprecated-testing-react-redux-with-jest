import React from 'react'
import { shallow } from 'enzyme' // eslint-disable-line import/no-extraneous-dependencies
import toJson from 'enzyme-to-json' // eslint-disable-line import/no-extraneous-dependencies
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'

describe('TodoList', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    wrapper = shallow(<TodoList {...props} />)
  })

  it('matches its snapshot - empty', () => {
    wrapper.setProps({ todos: [] })

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches its snapshot - with todos', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    expect(wrapper.is('ul')).toBe(true)
    expect(wrapper.hasClass('todo-list')).toBe(true)
  })

  it('renders todo items from props', () => {
    expect(wrapper.find(TodoItem).length).toBe(props.todos.length)
  })
})
