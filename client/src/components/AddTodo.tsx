import { useState, type FormEvent } from "react";

interface AddTodoProps {
    addTodo: (task: string) => void;
}

const AddTodo = ({addTodo}:AddTodoProps) => {
  const [task,setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!task.trim()) return;
    addTodo(task);
    setTask("");
}
    
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
            <button type="submit" className="bg-black text-white px-4 rounded-r-2xl">Add</button>
        </form>
    </div>
  )
}

export default AddTodo