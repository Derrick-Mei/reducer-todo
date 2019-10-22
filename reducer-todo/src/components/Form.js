import React from "react";

export default function Form(props) {
    const handleSubmit = e => {
        e.preventDefault();
        if (!props.inputState.item) return alert("Please enter todo");
        props.todoActions.addTodo(props.inputState.item);
        props.inputActions.handleChange("");
    };

    const handleChange = e => {
        props.inputActions.handleChange(e.target.value);
    };

    return (
        <form className="blue" onSubmit={handleSubmit}>
            Form
            <input
                placeholder="item"
                value={props.inputState.item}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
