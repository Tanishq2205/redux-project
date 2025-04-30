import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
export default function ToDo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos || []);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <>
            <h2>ToDo List App</h2>
            {todos.length === 0 ? (
                <p>No todos yet. Add a task!</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.task}
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}