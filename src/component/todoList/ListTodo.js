import React, {useContext} from 'react';
import { store } from '../../store';


const userTypes = {
  USER_LOGIN_SUCCESS : 'USER_LOGIN_SUCCESS'
}












const ListTodo = () => {
  const {state, dispatch} = useContext(store)

  const handleDelete = (id) => {
    dispatch({type: "Delete_Todo", data: id})
  }

  return (
    <ul>
      {state.map((list) => (
        <div key={list.id}>
        <li >{list.name}</li>
        <button onClick={() => handleDelete(list.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default ListTodo;
