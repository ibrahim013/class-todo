import './App.css';
import Header from './component/Layout/Header';
import AddTodo from './component/todoList/AddTodo';
import ListTodo from './component/todoList/ListTodo';

const data = {
  brandImg: '',
  brandName: 'My Todo List',
};

const todoList = [
  {
    id: Math.random(),
    name: 'wash',
    isDone: false,
  }
];

const App = () => (
  <div>
    <Header data={data} />
    <ListTodo data={todoList} />
    <AddTodo/>
  </div>
);

export default App;
