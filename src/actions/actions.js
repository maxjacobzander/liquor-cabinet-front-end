export const fetchDrinks = () => {
    return(dispatch) => {
        return fetch(`http://localhost:3001/api/v1/drinks`)
        .then(resp => resp.json())
        // .then(data => console.log)
        .then(drinks => {
            dispatch({ type: 'SET_DRINK', payload: drinks})
        })
    }
}


export const addDrink = drink => {
    return(dispatch) => {
        return fetch('http://localhost:3001/api/v1/drinks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({drink:drink})
        })
        .then(resp => resp.json())
        .then(drink => {
            dispatch({ type: "ADD_DRINK", payload: drink })
        })
    }
}

export const editDrink = drinkID => {
    return(dispatch) => {
        return fetch(`http://localhost:3001/api/v1/drinks/${drinkID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({drink:drink})
        })
        .then(resp => resp.json())
        .then(drink => {
            dispatch({ type: "EDIT_DRINK", payload: drink.id })
        })
    }
}