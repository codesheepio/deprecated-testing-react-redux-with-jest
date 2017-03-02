import React, { Component, PropTypes } from 'react'

class NewTodo extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.typingHandler = this.typingHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  typingHandler(event) {
    this.setState({
      text: event.target.value,
    })
  }

  clickHandler() {
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="new-todo">
        <input onChange={this.typingHandler} value={this.state.text} />
        <button className="btn" onClick={this.clickHandler}>Add</button>
      </div>
    )
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default NewTodo
