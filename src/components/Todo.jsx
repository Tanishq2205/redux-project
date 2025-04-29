import { useSelector } from "react-redux";
import AddTask from "./AddTask";

export default function ToDo() {
    const todos = useSelector((state) => {
        return state.todos
    })

    console.log(todos)

    return (
        <>
            <AddTask></AddTask>
            <h2>ToDo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}
                        <button>Delete</button>
                    </li>
                    ))}
            </ul>
        </>
    );
}