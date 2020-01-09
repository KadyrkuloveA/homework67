const initialState = {
    secretNum: '',
    success: false,
};
const password = '1337';

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_NUM') {
        if (state.secretNum.length > 3) {
            return {...state, secretNum: state.secretNum.substring(0, state.secretNum.length)}
        }
        return {...state, secretNum: state.secretNum + action.value};
    }

    if (action.type === 'DEL_NUM') {
        return {
            ...state,
            secretNum: state.secretNum.substring(0, state.secretNum.length -1)
        }
    }

    if (action.type === 'CHECK_NUM') {
        if (state.secretNum !== password) {
            return {...state, secretNum: '', success: false}
            alert("Wrong Password");
        } else if (state.secretNum === password) {
            return {...state, success: true}
            alert("Access Granted");
        }
    }

    return state;
};

export default reducer;