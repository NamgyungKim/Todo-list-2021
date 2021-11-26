import React from 'react';

const Footer = (props) => {
  const gauge = props.gauge()

  return (
    <footer className="footer">
      <div className="rate"> 
        { 
          gauge === 0 ?
          <div className="no_gauge">할일을 완료해주세요</div>:
          <div className="gauge" style={{width: gauge+'%'}}>{gauge}%</div>
        }
      </div>
      <button type="button" className="reset_btn">RESET</button>
    </footer>
  )
}

export default Footer;