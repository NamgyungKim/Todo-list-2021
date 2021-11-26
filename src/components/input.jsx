import React from 'react';

const Input = (props) => {
  return(
    <form className="form">
      <input type="text" className="input"/>
      <button className="add_btn"><i className="fas fa-plus"></i></button>
    </form>
  )
}

export default Input;