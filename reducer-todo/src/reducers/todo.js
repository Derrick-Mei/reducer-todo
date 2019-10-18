export const initialTodoState = [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589,
        // dueDate: 3892987589, // stretch
        // tags: [] // stretch
    }
];

export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload, ...state];
        case "TOGGLE_TODO":
            const oldState = [...state];
            return oldState.map(item => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                return item;
            });
        case "CLEAR_COMPLETED":
            const completedState = [...state];
            return completedState.filter(item => !item.completed);
        default:
            return state;
    }
}
