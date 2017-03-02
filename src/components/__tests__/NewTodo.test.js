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
    wrapper = shallow(<NewTodo />)

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
})
