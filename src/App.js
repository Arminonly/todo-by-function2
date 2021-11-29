import React, { useState } from 'react'
import './App.css'
import ItemList from './itemList'
// import ItemList from './itemList'

function App() {
  const [todos, setTodos] = useState([])
  const [addText, setAddText] = useState('')

  function changevalue(text, key) {
    const changedValue = [...todos]
    // eslint-disable-next-line
    changedValue.map((todo) => {
      if (todo.key === key) {
        todo.text = text
      }
    })
    setTodos(changedValue)
  }

  function deleteTodo(key) {
    const deletedTodo = [...todos].filter((todo)=> todo.key !== key)
    setTodos(deletedTodo)
  }

  function toggle(key) {
    const toggle = [...todos]
    toggle.map((todo)=>{
      if (todo.key === key) {
        todo.complited = !todo.complited
      }
      return todo
    })
    setTodos(toggle)
  }

  function addItem(e) {
    e.preventDefault()
    const newItem = {
      text: addText,
      key: Date.now(),
      complited: false,
    }
    setTodos([...todos].concat(newItem))
    setAddText('')
  }

  return (

    <div className="App">
      <header>
        <form onSubmit={addItem}>
          <input
            type="text"
            placeholder="Add a todo"
            onChange={(e) => setAddText(e.target.value)}
            value={addText}
          />
          <button type="submit">Add todo</button>
        </form>
      </header>

      {/* <div> */}

{/* 
        {todos.length ? (
          todos.map((todo) => {
            const classes = []
            if(todo.complited){
              classes.push('done')
            }
            return (
              <div key={todo.key}>
                <p>
                <input
                  type='checkbox'
                  onChange={()=>toggle(todo.key)}
                />
                  <input
                  className={classes.join(' ')}
                    onChange={(e) => changevalue(e.target.value, todo.key)}
                    type="text"
                    value={todo.text}
                  />
                  <span style={{ cursor: 'pointer' }}
                  onClick={()=>deleteTodo(todo.key)}
                  >&times;
                  </span>
                </p>
              </div>
            )
          })
        ) : (
          <div>
            <h1>No todos</h1>
          </div>
        )}
      </div> */}
<div>
  <ItemList
  toggledItem={toggle}
  delItems={deleteTodo}
  changeValue={changevalue}
    items={todos}
  />
</div>
  
    </div>
  )
}

export default App
