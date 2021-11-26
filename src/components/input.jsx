import React, { useRef } from 'react';

const Input = (props) => {
  const input_vlue = useRef()
  const list = props.list

  const add_list = () => {
    props.setList(list.concat(input_vlue.current.value))
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      add_list()
      input_vlue.current.value = ''
    }
  }

  return(
    <div className="form">
      <input ref={input_vlue} onKeyPress={onKeyPress} type="text" className="input" placeholder="할일을 입력해주세요."/>
      <button type="button" onClick={add_list} className="add_btn">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  )
}

export default Input;