export const AddItem = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
    
}
export const DLT = (id) => {
    return {
        type: "DELETE_CART",
        payload: id
    }
    
}

export const RMV = (id) => {
    return {
        type: "REDUCE_CART",
        payload: id
    }
    
}

export const RMVAll = (items) => {
    return {
        type: "EMPTY_CART",
        payload: items
    }
    
}