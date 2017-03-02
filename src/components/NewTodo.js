import React, { Component } from 'react'

class NewTodo extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.typingHandler = this.typingHandler.bind(this)
  }

  typingHandler(event) {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div className="new-todo">
        <input onChange={this.typingHandler} value={this.state.text} />
        <button className="btn">Add</button>
      </div>
    )
  }
}

export default NewTodo
