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
        default:
            return state
    }
}

// {name: "Manhattan", main_liquor: "Whiskey", ingredients: "2 oz rye whiskey, .75 oz sweet red vermouth, 1-2 dashes Angostura bitters, Maraschino cherry", instructions: "In a mixing glass, add rye, vermouth, bitters, and a large cube of ice. Stir. Strain into a chilled cocktail glass and garnish with a cherry."}