import './app.css';
import Header from './components/header';
import Input from './components/input';
import List from './components/list';

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Input />
      <List />
    </div>
  );
}

export default App;
