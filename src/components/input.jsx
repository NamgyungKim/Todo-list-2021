import React, { useRef } from 'react';

const Input = (props) => {
  const input_vlue = useRef()
  const list = props.list

  const add_list = () => {
    console.log(input_vlue.current.value)
    props.setList(list.concat(input_vlue.current.value))
  }

  return(
    <form className="form">
      <input ref={input_vlue} type="text" className="input" placeholder="할일을 입력해주세요."/>
      <button type="button" onClick={add_list} className="add_btn">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  )
}

export default Input;