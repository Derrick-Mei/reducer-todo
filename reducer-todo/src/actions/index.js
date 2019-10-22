export const mapInputDispatch = dispatch => ({
    handleChange: payload => {
      dispatch({ type: "HANDLE_CHANGE", payload })}
});

export const mapTodoDispatch = dispatch => ({
    addTodo: item =>
        dispatch({
            type: "ADD_TODO",
            payload: { item: item, completed: false, id: Date.now() }
        }),
    toggleTodo: id => dispatch({ type: "TOGGLE_TODO", payload: id }),
    clearCompleted: () => dispatch({ type: "CLEAR_COMPLETED" })
});