const initialState = 5;
const multiTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLY":
            return state * action.payload;
        case "DIVIDE":
            return state / 5;
        default: return state;
    }
}

export default multiTheNumber;