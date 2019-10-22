import React from "react";

export default function Todo(props) {
    return (
        <div className="green" onClick={()=> props.todoActions.toggleTodo(props.id)}>
            <div>{props.item}</div>
            <label>
                Completed
                <input type="checkbox" checked={props.completed} />
            </label>
        </div>
    );
}
