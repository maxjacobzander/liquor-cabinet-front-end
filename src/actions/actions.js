export const fetchLiquors = () => {
    return(dispatch) => {
        return fetch(`http://localhost:3001/api/v1/liquors/{this.id}`)
        .then(resp => resp.json())
        .then(liquor => {
            dispatch({ type: 'SET_LIQUORS', payload: liquors})
        })
    }
}


export const addDrink = drink => {
    return(dispatch) => {
        return fetch('http://localhost:3001/api/v1/liquors/7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pet:pet})
        })
        .then(resp => resp.json())
        .then(drink => {
            dispatch({ type: "ADD_DRINK", payload: drink })
        })
    }
}