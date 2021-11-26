import { useState } from 'react';
import './app.css';
import Footer from './components/footer';
import Header from './components/header';
import Input from './components/input';
import List from './components/list';

const App = () => {
  const [list,setList] = useState([
    {name:'공부하기', check: false},
    {name:'장보기',check: false}, 
    {name:'청소하기',check: false}
  ])
  
  const gauge = () => {
    let done = 0
    for(let i = 0; i < list.length; i++){
      list[i].check === true && done++
    }
    return Math.floor(done/list.length*100)
  }

  return (
    <div className="wrap">
      <Header />
      <Input list={list} setList={setList} />
      <List list={list} setList={setList}/>
      <Footer gauge={gauge}/>
    </div>
  );
}

export default App;
