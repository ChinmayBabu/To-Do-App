import { useState, type FormEvent } from "react";

interface AddTodoProps {
    addTodo: (task: string,action: string) => void;
}

const AddTodo = ({addTodo}:AddTodoProps) => {
  const [task,setTask] = useState<string>("");
  const [action,setAction] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!task.trim() || !action.trim()) return;
    addTodo(task,action);
    setTask("");
    setAction("");
  };
    
  return (
    <div>
        <form onSubmit = {handleSubmit} className = "flex mb-4 overflow-auto shadow-lg">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                className ="border p-2 flex-1 rounded-1"
            />
            <input
                type="text"
                value={action}
                onChange={(e) => setAction(e.target.value)}
                placeholder="Action"
                className ="border p-2 flex-1 rounded-1"
            />
            <button type="submit" className="bg-blue-900 text-white px-4 rounded-r-2xl">Add</button>
        </form>
    </div>
  )
}

export default AddTodo