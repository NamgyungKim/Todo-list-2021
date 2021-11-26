import React from 'react';

const List = (props) => {
  const list = props.list

  return (
    <ul className="con" key='1'>
      {
        list.map((todo,index)=>(
          <li className="list" key={index}>
            <span className="check">
              <i className="fas fa-check"></i>
            </span>
            { todo }
            <span className="delete">
              <i className="fas fa-times"></i>
            </span>
          </li>
        ))
      }
    </ul>
  )
}

export default List;