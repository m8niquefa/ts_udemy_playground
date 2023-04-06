import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo: Todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(ID, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  
    The todo with ID: ${id}
    has a tittle of "${title}"
    and is finished: ${completed}.
  
  `);
}