import React from 'react'
import { shallow } from 'enzyme' // eslint-disable-line import/no-extraneous-dependencies
import toJson from 'enzyme-to-json' // eslint-disable-line import/no-extraneous-dependencies
import TodoItem from '../TodoItem'

describe('TodoItem', () => {
  it('matches its snapshot - not complete', () => {
    const wrapper = shallow(<TodoItem text="Drink coffee" />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches its snapshot - complete', () => {
    const wrapper = shallow(<TodoItem text="Drink coffee" complete />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('contains one <li> with text from props', () => {
    const wrapper = shallow(<TodoItem text="Drink coffee" />)

    expect(wrapper.find('li').length).toBe(1)
    expect(wrapper.find('li').at(0).text()).toEqual('Drink coffee')
  })

  it('has complete className if receiving complete from props', () => {
    const wrapper = shallow(<TodoItem text="Drink coffee" complete />)

    expect(wrapper.find('li').at(0).hasClass('complete')).toBe(true)
  })
})
