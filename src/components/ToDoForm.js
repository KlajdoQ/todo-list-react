import React from 'react'

export default function ToDoForm(props) {

    //first we get the value of the input 
function handleChange(event) {
    props.setTodo(event.target.value)
  }
  

//then we move the value to the list when we click the button 
function onClick(event) {
    event.preventDefault()
    props.setList(prev => {
      return[
        ...prev,
        props.todo
      ]
    })
    props.setTodo('')
  }

  return (
    <div>
         <form>
            <input type="text" name="name" value={props.todo} onChange={handleChange} placeholder="enter todo"/>
            <button type="text" onClick={onClick}>Submit</button>
        </form>
    </div>
  )
}
