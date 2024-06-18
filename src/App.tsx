import axios from 'axios'
import React, { useState } from 'react'
import { Todo } from './Todo';
import { TodoType } from './types/Todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickDate = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    })
  }
  return (
    <div>
      <Text color="red" fontSize="18px" />
      <UserProfile name='田中' hobbies={["eiga", "baseball"]} />
      <button onClick={onClickDate}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
    </div>
  )
}
