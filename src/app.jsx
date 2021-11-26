import './app.css';
import Header from './components/header';
import Input from './components/input';
import List from './components/list';

const App = () => {
  const list = ['공부하기','장보기','청소하기']

  return (
    <div className="wrap">
      <Header />
      <Input />
      <List list={list}/>
    </div>
  );
}

export default App;
