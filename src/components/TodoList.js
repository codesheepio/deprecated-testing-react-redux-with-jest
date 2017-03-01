import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    { todos.map(todo => (<TodoItem key={todo.id} {...todo} />)) }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

export default TodoList
