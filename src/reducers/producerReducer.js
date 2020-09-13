const seedData = [
    {
        food: "lettuce",
        quantity: 14
    },
    {
        food: "turnips",
        quantity: 11
    },
    {
        food: "apples",
        quantity: 35
    },
    {
        food: "cilantro",
        quantity: 135        
    }
]

export default (state = seedData, action)=>{
    if(action.type === 'updateProduce'){
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