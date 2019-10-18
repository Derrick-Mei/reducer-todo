import React from "react";
import "./App.css";

import { initialInputState, inputReducer } from "./reducers/input";
import { initialTodoState, todoReducer } from "./reducers/todo";
import { mapInputDispatch, mapTodoDispatch } from "./actions";

import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
    const [inputState, inputDispatch] = React.useReducer(inputReducer, initialInputState);
    const [todoState, todoDispatch] = React.useReducer(todoReducer, initialTodoState);

    const inputActions = mapInputDispatch(inputDispatch);
    const todoActions = mapTodoDispatch(todoDispatch);

    return (
        <div className="App">
            <Form
                inputActions={inputActions}
                inputState={inputState}
                todoActions={todoActions}
                todoState={todoState}
            />
            <TodoList todoActions={todoActions} todoState={todoState} />
        </div>
    );
}

export default App;
