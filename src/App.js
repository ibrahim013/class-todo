import './App.css';
import Header from './component/Layout/Header';
import AddTodo from './component/todoList/AddTodo';
import ListTodo from './component/todoList/ListTodo';
import { Route, Switch } from 'react-router-dom';

const data = {
  brandImg: '',
  brandName: 'My Todo List',
};

const App = () => (
  <div>
    <Header data={data} />
    <Switch>
      <Route exact path="/" component={ListTodo} />
      <Route exact path="/add-todo" component={AddTodo} />
    </Switch>
  </div>
);

export default App;
