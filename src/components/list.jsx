import React from 'react';

const List = (props) => {
  const list = props.list

  return (
    <ul className="con">
      <li className="list">
        <span className="check">
          <i className="fas fa-check"></i>
        </span>
        {list}
        <span className="delete">
          <i className="fas fa-times"></i>
        </span>
      </li>
    </ul>
  )
}

export default List;