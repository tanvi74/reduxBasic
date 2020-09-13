const seedData = [
    {
        food: "chicken breast",
        quantity: 14
    },
    {
        food: "bacon",
        quantity: 11
    },
    {
        food: "mahi mahi",
        quantity: 35
    },
    {
        food: "salmon",
        quantity: 135        
    }
]

export default (state = seedData, action) =>{
    if(action.type === 'updateMeat'){
        let newState = [...state];
        if(action.payload.operation === '+')
            newState[action.payload.index].quantity++;
        else
        newState[action.payload.index].quantity--;

        return newState;
    }else if(action.type === 'clearInventory'){
        let newState = [...state];
        newState.forEach((item,i)=>{
            item.quantity = 0;
        })
        return newState;
    }
    else{
        return state;
    }
}