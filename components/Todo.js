import React from 'react'
import utilStyles from '../styles/utils.module.css'

const Todo = ({todos, headline}) => {
  if (!todos || todos.length === 0)return <p>no todos, sorry </p>

  return (
    <ul>
      <h2 className={utilStyles.headingLg}>Available {headline}</h2>
      {
        todos.map( todo => {
          return (
            <li key={todo.id} className="list">
              <p className='repo-text'>
                {todo.title}
                { todo.completed &&
                  <strong> task completed</strong>
                }
              </p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Todo