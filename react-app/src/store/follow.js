
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
        console.log('follows thunk>>>>>>>>>>>:', allUserFollows)
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

// ADD FOLLOW
const ADD_FOLLOW = 'follows/ADD_FOLLOW'

const createFollow = (follow) => {
    return{
        type: ADD_FOLLOW,
        follow
    }
}

export const createFollowThunk = (userId, follow) => async(dispatch) => {
    console.log('In the Create follow thunk**********')
    console.log('userId before backend', userId)
    console.log('data before goes to backend', follow)

    const res = await fetch(`/api/users/${userId}/follows/create`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(follow),
    })

    if(res.ok){
        const newFollow = await res.json()
        console.log('create Follow thunk  after:', newFollow)
        dispatch(createFollow(newFollow))
        return res;
    }
}




// UNFOLLOW
const DELETE_FOLLOW = 'follows/DELETE_FOLLOW'

const unFollow = (follow) => {
    return {
        type: DELETE_FOLLOW,
        follow,
    }
}

export const unFollowThunk = (userId, followId) =>async(dispatch) => {
    console.log('in the delete thunk^^^^^^^^^^^^^^^^')
    const res = await fetch(`/api/users/${userId}/follows/${followId}`,{
        method: "DELETE",
      })


    if(res.ok){
        // const follow = await res.json()
        console.log('##########DELETE thunk:', res)
        dispatch(unFollow(followId))
        return res;
    }
}




// ---------------------- Reducer --------------------------------

const initialState = {};

const follows = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_FOLLOWS:
            let newState = {}
            newState = action.follows;
            return newState;
        case ADD_FOLLOW:
            let apple = {...state}
            apple.following[action.follow.id] = action.follow.userId
            return apple
        case DELETE_FOLLOW:
            const test = {...state};
            // delete test.followers[action.follow];
            // return test;
            delete test.followers[action.followeId]
            return test

        // case GET_USER_FOLLOWS:
        //     const newState = {}
        //     action.follows.follows.forEach((follow) => {
        //         newState[follow.followingId] = follow;
        //     });
        //     action.follows.eachFollow.forEach((follow) => {
        //         newState[follow.username] = follow;
        //     });
        //     return newState;
        // case GET_NOT_FOLLOWS:
        //     const newState1 = {}
        //     action.notfollows.notfollows.forEach((notfollow) => {
        //         newState1[notfollow.followingId] = notfollow;
        //     });
        //     action.notfollows.eachnotFollow.forEach((notfollow) => {
        //         newState1[notfollow.username] = notfollow;
        //     });
        //     return newState1;


        default:
            return state;
    }
}


export default follows;

