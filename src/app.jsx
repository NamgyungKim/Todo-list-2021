import { useState } from 'react';
import './app.css';
import Header from './components/header';
import Input from './components/input';
import List from './components/list';

const App = () => {
  const [list,setList] = useState(['공부하기','장보기','청소하기'])

  return (
    <div className="wrap">
      <Header />
      <Input list={list} setList={setList} />
      <List list={list} />
    </div>
  );
}

export default App;
