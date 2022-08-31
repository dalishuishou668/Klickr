
// GET ALL users
const GET_ALL_USER = 'users/GET_ALL_USER'

const getAllUsers = (users) => {
    return {
        type: GET_ALL_USER,
        users,
    }
}

export const getAllUsersThunk = () => async (dispatch) => {
    const res = await fetch(`/api/users/`)
    console.log('in the thunk users%%%%%%%%%%%%%%')

    if (res.ok) {
        const users = await res.json()
        console.log('users thunk:', users)
        dispatch(getAllUsers(users))
        return res;
    }
}







// ---------------------- Reducer --------------------------------

const initialState = {};

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER:
            const newState = {}
            action.users.users.forEach((user) => {
                newState[user.id] = user
            })
            return newState;
        default:
            return state;
    }
}


export default users;
