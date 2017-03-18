import React from 'react'
import { shallow } from 'enzyme'
import serializer from 'enzyme-to-json/serializer'
import TodoItem from '../TodoItem'

expect.addSnapshotSerializer(serializer)

describe('TodoItem', () => {
  it('matches its snapshot when not complete', () => {
    const component = shallow(<TodoItem text="Not complete" />)
    expect(component).toMatchSnapshot()
  })
})
