import React from "react";
import Todo from "./Todo";


export default function TodoList(props) {
    return (
        <div className="red">
            {props.todoState.map(todo => (
                <Todo key={todo.id} todoActions={props.todoActions} {...todo} />
            ))}
        </div>
    );
}
