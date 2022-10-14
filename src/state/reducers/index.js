export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            pay: amount
        })
    }

}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            pay: amount
        })
    }

}