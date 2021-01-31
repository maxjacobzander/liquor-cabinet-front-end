export default (state = [], action) => {
    switch(action.type){
        case "SET_DRINK":
            return [...action.payload]
        case "FIND_DRINK":
            return [...action.payload]
        case "ADD_DRINK":
            return [...state, action.payload]
        default:
            return state
    }
}