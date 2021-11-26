import React from 'react';

const List = (props) => {
  const list = props.list

  return (
    <ul className="con">
      {
        list.map((todo)=>(
          <li className="list">
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