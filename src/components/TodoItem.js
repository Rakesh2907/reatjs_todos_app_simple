import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"

const TodoItem = (props) => {
    const { todo,  importantToDo, completeTodo, removeTodo} = props;
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <button onClick={() => importantToDo(todo.id)} className="important-btn">!</button>
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
                <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    )
}

export default TodoItem
