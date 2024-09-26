
const decrement = "decrement";
const reset = "reset";
const initialState = 0;


const counterReducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case decrement:
            return state - 1
        case reset:
            return initialState
        default:
            state
    }
}

export { counterReducer, decrement, reset, initialState }
