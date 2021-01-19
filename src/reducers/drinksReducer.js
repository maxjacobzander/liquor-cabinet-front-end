let id = 0

export default (state = [], action) => {
    switch(action.type){
        case "ADD_DRINK":
            return [...state, action.payload]
        default:
            return state
    }
}