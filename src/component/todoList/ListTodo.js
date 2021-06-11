import React from 'react';

const ListTodo = ({ data }) => {
  return (
    <ul>
      {data.map((list, index) => (
        <li key={index}> {list.name}</li>
      ))}
    </ul>
  );
};

export default ListTodo;
