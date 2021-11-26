import { useState } from 'react';
import './app.css';
import Footer from './components/footer';
import Header from './components/header';
import Input from './components/input';
import List from './components/list';

const App = () => {
  const [list,setList] = useState([
    {name:'완료시 클릭해주세요', check: true},
    {name:'할일 목록을 써주세요',check: false}
  ])
  
  const gauge = () => {
    let done = 0
    for(let i = 0; i < list.length; i++){
      list[i].check === true && done++
    }
    if( Math.floor(done/list.length*100) >= 0){
      return Math.floor(done/list.length*100)
    }else{
      return null
    }
  }

  return (
    <div className="wrap">
      <Header />
      <Input list={list} setList={setList} />
      <List list={list} setList={setList}/>
      <Footer gauge={gauge} setList={setList}/>
    </div>
  );
}

export default App;
