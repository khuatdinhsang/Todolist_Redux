import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, decrease, deleteTodo, editTodo, increase, setTodo, toggleTodo } from "./action";
import { useState } from "react";
export default function App() {
    const count = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();

    const handleIncrease = (data) => {
        dispatch(increase(data));
    };
    const handleDecrease = (data) => {
        dispatch(decrease(data));
    };
    const todoInit = useSelector((state) => state.todoListReducer);
    const { list, todo } = todoInit;
    const [checked, setChecked] = useState(false);
    const [id, setId] = useState("");

    const handleSetItem = (e) => {
        dispatch(setTodo(e.target.value));
    };
    const handleADD = () => {
        if (checked) {
            dispatch(
                editTodo({
                    id,
                    todo
                })
            );
            setChecked(false);
        } else {
            dispatch(
                addTodo({
                    id: uuidv4(),
                    name: todo,
                    completed: false
                })
            );
        }
        dispatch(setTodo(""));
    };
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleEdit = (id) => {
        setChecked(true);
        const editItem = list.find((item) => item.id === id);
        dispatch(setTodo(editItem.name));
        setId(id);
    };
    return (
        <div className="App">
            <h1>sang dep trai</h1>
            <h1>{count}</h1>
            <button onClick={() => handleIncrease(2)}>Tăng</button>
            <button onClick={() => handleDecrease(4)}>Giảm</button>
            <h1>TodoList</h1>
            <input type="text" value={todo} onChange={handleSetItem} />
            <button onClick={handleADD}>ADD</button>
            {list.map((item) => {
                return (
                    <div key={item.id}>
                        <li
                            className={item.completed ? "active" : ""}
                            onClick={() => handleToggle(item.id)}
                        >
                            {item.name}
                        </li>
                        <button onClick={() => handleDelete(item.id)}>Xoa</button>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                    </div>
                );
            })}
        </div>
    );
}
