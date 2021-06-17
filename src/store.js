import React, { useReducer, createContext } from 'react';

const initialState = [];
const store = createContext(initialState);

const { Provider } = store;

const deleteTodo = (todoList, id) => todoList.filter((todo) => todo.id !== id);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'Add_Todo':
        return [...state, action.data];
      case 'Delete_Todo':
        return deleteTodo(state, action.data);
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
