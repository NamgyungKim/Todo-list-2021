import React from 'react';

const List = (props) => {
  return (
    <ul className="con">
      <li className="list">
        <span className="check">
          <i class="fas fa-check"></i>
        </span>
        공부하기
        <span className="delete">
          <i class="fas fa-times"></i>
        </span>
      </li>
    </ul>
  )
}

export default List;