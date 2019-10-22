export const initialInputState = { item: "" };

export function inputReducer(state, action) {
    switch (action.type) {
        case "HANDLE_CHANGE":
            return { item: action.payload };
        default:
            return state;
    }
}
