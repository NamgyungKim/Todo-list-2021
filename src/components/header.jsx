import React from 'react';

const Header = (props) => {
  const week = ['MON','TUE','WED','THU','FRI','SAT','SUN']
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const date = new Date().getDate()
  const day = week[new Date().getDay()]
  const today = year +'.'+ month + '.' + date 

  return (
    <header>{today} &nbsp; {day}</header>
  )
}

export default Header;