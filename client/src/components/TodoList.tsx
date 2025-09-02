import { useEffect, useState } from 'react'
import AddTodo from './AddTodo';
import { Table,TableHeader,TableBody,TableRow,TableCell,TableHead } from './ui/table';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import type { Todo } from '@/types';

const TodoList = () => {
  
  const [todos, setTodos] = useState<Todo[]>(()=>{
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [
        { id: 1, task: "Sample Task", action:"Sample Action", done: false }
    ];
  });

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const addTodo = (task: string,action: string) => {
    setTodos([...todos, { id:Date.now(),task,action,done:false}]);
  };

  const toggleTodo = (id : number) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
    );
  };

  const deleteTodo = (id: number) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  return (
    <div className="w-full max-w-2xl bg-grey-400 dark:bg-gray-800 shadow-md rounded-2xl p-6">
        <AddTodo addTodo={addTodo}/>
        <Table className="border rounded-lg overflow-hidden shadow-lg">
            <TableHeader>
                <TableRow>
                    <TableHead>Done</TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Delete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.map((todo)=>(
                    <TableRow key={todo.id}>
                        <TableCell>
                            <Checkbox
                                checked = {todo.done}
                                onCheckedChange={() => toggleTodo(todo.id)}
                            />
                            </TableCell>
                            <TableCell className={todo.done ? "line-through text-grey-400":""}>
                                {todo.task}
                            </TableCell>
                            <TableCell className={todo.done ? "line-through text-grey-400":""}>
                                {todo.action}
                            </TableCell>
                            <TableCell>
                                <Button variant="destructive" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                            </TableCell>
                    </TableRow>
                    ))}
            </TableBody>
        </Table>
    </div>
  );
}

export default TodoList