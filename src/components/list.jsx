import React from 'react';

const List = (props) => {
  const list = props.list


  const check = (index) => {
    let newArr = [...list]
    if(newArr[index].check === false){
      newArr[index].check = true
    }else{
      newArr[index].check = false
    }
    props.setList(newArr)
  }

  const deleteList = (index) => {
    let newArr = [...list]
    newArr.splice(index,1)
    props.setList(newArr)
  }
  
  return (
    <ul className="con" key='1'>
      { 
        list.map((todo,index)=>(
          <li 
            style={todo.check ? {textDecoration:'line-through', color:'#ddd'}:{} } 
            className="list" 
            key={index}
          >
            <div onClick={(()=>check(index))} >
              <span className="check">
                { todo.check && <span><i className="fas fa-check"></i></span> }
              </span>
              { todo.name }
            </div>
            <span onClick={(()=>deleteList(index))} className="delete">
              <i className="fas fa-times"></i>
            </span>
          </li>
        ))
      }
    </ul>
  )
}

export default List;