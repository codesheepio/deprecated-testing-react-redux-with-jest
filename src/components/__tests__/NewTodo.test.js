import React from 'react'
import { shallow } from 'enzyme' // eslint-disable-line import/no-extraneous-dependencies
import toJson from 'enzyme-to-json' // eslint-disable-line import/no-extraneous-dependencies
import NewTodo from '../NewTodo'

describe('NewTodo', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      addTodo: jest.fn(),
    }
    wrapper = shallow(<NewTodo {...props} />)
  })

  it('matches its snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.hasClass('new-todo')).toBe(true)
    expect(wrapper.find('input').length).toBe(1)
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').first().hasClass('btn'))
    expect(wrapper.find('button').first().hasClass('btn-primary'))
  })

  it('changes state when typing', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Hello',
      },
    })
    expect(wrapper.state('text')).toBe('Hello')
  })

  it('calls props.addTodo when clicking Add button', () => {
    wrapper.setState({ text: 'Hello' })
    wrapper.find('button').simulate('click')
    expect(props.addTodo).toHaveBeenCalledWith('Hello')
  })
})
