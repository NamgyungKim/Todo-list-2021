import React from 'react';

const Footer = (props) => {
  const gauge = props.gauge()

  return (
    <footer className="footer">
      <div className="rate"> 
        <div className="gauge" style={{width: gauge+'%'}}>{gauge}%</div>
      </div>
      <button type="button" className="reset_btn">RESET</button>
    </footer>
  )
}

export default Footer;