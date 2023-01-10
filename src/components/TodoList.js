import React from 'react'

export default function TodoList(props) {

    function deleteEl (index){
        props.list.splice(index, 1)
        props.setList([...props.list])
      }

      if(props.list.length <1) {
        return (
            <div className="text-center">
                <h3>No todo's on your list</h3>
            </div>
        )
      }
  return (
    <div>
        <ul>
        {props.list.map((item,index) => {
          return (
            <>
            <li key={item}>{item}<button type="text" onClick={() => deleteEl(index)}>X</button></li>
            </>

          ) 
        })}
    </ul>
    </div>
  )
}
