let id = 0

export default (state = [{name: "Manhattan", main_liquor: "Whiskey", ingredients: "2 oz rye whiskey, .75 oz sweet red vermouth, 1-2 dashes Angostura bitters, Maraschino cherry", instructions: "In a mixing glass, add rye, vermouth, bitters, and a large cube of ice. Stir. Strain into a chilled cocktail glass and garnish with a cherry."}], action) => {
    const newDrink = () => {
        return {
            ...action.payload,
            id: id++
        }
    }
    switch(action.type){
        case "ADD_DRINK":
            return [...state, newDrink]
        // case "EDIT_DRINK":
            //Add EDIT functionality if it feels right
        default:
            return state
    }
}