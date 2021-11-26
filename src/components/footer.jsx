import React from 'react';

const Footer = (props) => {
  const gauge = props.gauge()
  console.log(gauge)

  return (
    <footer className="footer">
      <div className="rate"> 
        { 
          (()=>{
            if(gauge === 0){
              return <div className="no_gauge">할일을 완료해주세요</div>
            }else if(gauge === null){
              return <div className="no_gauge">할일을 입력해주세요</div>
            }else{
              return <div className="gauge" style={{width: gauge+'%'}}>{gauge}%</div>
            }
          })()
        }
      </div>
      <button type="button" className="reset_btn">RESET</button>
    </footer>
  )
}

export default Footer;