// let id = 0

export default (state = [], action) => {
    switch(action.type){
        case "ADD_DRINK":
            return [...state, action.payload]
        // case "EDIT_DRINK":
            //Add EDIT functionality if it feels right
        default:
            return state
    }
}