
// GET ALL FOLLOWS OF A USER
const GET_USER_FOLLOWS = 'follows/GET_USER_FOLLOWS'

const getUserFollows = (follows) => {
    return {
        type: GET_USER_FOLLOWS,
        follows,
    }
}

export const getUserFollowsThunk = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/yourfollows`)
    console.log('in the thunk follows%%%%%%%%%%%%%%')

    if (res.ok) {
        const allUserFollows = await res.json()
        console.log('follows thunk:', allUserFollows)
        dispatch(getUserFollows(allUserFollows))
        return res;
    }
}

//
// GET ALL FOLLOWS user not follow
const GET_NOT_FOLLOWS = 'follows/GET_NOT_FOLLOWS'

const getNotFollows = (notfollows) => {
    return {
        type: GET_NOT_FOLLOWS,
        notfollows,
    }
}

export const getNotFollowsThunk = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/notfollows`)
    console.log('in the thunk not follows%%%%%%%%%%%%%%')

    if (res.ok) {
        const allnotFollows = await res.json()
        console.log('not follows thunk:', allnotFollows)
        dispatch(getNotFollows(allnotFollows))
        return res;
    }
}

// GET SINGLE IMAGE
const GET_SINGLE_IMAGE = 'images/GET_SINGLE_IMAGE'



// CREATE AN IMAGE
const CREATE_IMAGE = 'images/CREATE_IMAGE'


// EDIT AN IMAGE
const EDIT_IMAGE = 'images/EDIT_IMAGE'



// DELETE AN IMAGE
const DELETE_IMAGE = 'images/DELETE_IMAGE'




// ---------------------- Reducer --------------------------------

const initialState = {};

const follows = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_FOLLOWS:
            const newState = {}
            action.follows.follows.forEach((follow) => {
                newState[follow.followingId] = follow;
            });
            action.follows.eachFollow.forEach((follow) => {
                newState[follow.username] = follow;
            });
            return newState;
        case GET_NOT_FOLLOWS:
            const newState1 = {}
            action.notfollows.notfollows.forEach((notfollow) => {
                newState1[notfollow.followingId] = notfollow;
            });
            action.notfollows.eachnotFollow.forEach((notfollow) => {
                newState1[notfollow.username] = notfollow;
            });
            return newState1;


        default:
            return state;
    }
}


export default follows;
