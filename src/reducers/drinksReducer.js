export default (state = [], action) => {
    switch(action.type){
        case "SET_DRINK":
            return [...action.payload]
        case "FIND_DRINK":
            return [...action.payload]
        case "ADD_DRINK":
            return [...state, action.payload]
        case "EDIT_DRINK":
            // Add EDIT functionality if it feels right
        // case "CLEAR_DRINK":
        //     return state
        default:
            return state
    }
}