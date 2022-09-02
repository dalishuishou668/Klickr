// // get all faves of a single image

// const GET_ALL_FAVES = 'faves/GET_ALL_FAVES'

// const getImageFaves = (faves) => {
//     return {
//         type: GET_ALL_FAVES,
//         faves,
//     }
// }

// export const getImageFavesThunk = (imageId) =>async(dispatch) => {
//     const res = await fetch(`/api/images/${imageId}/faves`)

//     if(res.ok){
//         const allFaves = await res.json()
//         console.log('all faves thunk:', allFaves)
//         dispatch(getImageFaves(allFaves))
//         return res;
//     }
// }

// // get all faves of a single user

// const GET_USER_FAVES = 'faves/GET_USER_FAVES'

// const getUserFaves = (faves) => {
//     return {
//         type:GET_USER_FAVES,
//         faves,
//     }
// }

// export const getUserFavesThunk = (userId) =>async(dispatch) => {
//     const res = await fetch(`/api/images/userfaves/${userId}`)

//     if(res.ok){
//         const userFaves = await res.json()
//         console.log('!!!!!!!!!!!!!!!!thunk:', userFaves)
//         dispatch(getUserFaves(userFaves))
//         return res;
//     }
// }




// // add user fave

// const ADD_USER_FAVE = 'faves/ADD_USER_FAVE'

// const addUserFave = (fave) => {
//     return {
//         type:ADD_USER_FAVE,
//         fave,
//     }
// }

// export const addUserFaveThunk = (fave, imageId) =>async(dispatch) => {
//     const res = await fetch(`/api/images/${imageId}/favorites/create`,{
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(fave),
//       })
//     console.log('in create fave thunk#################')

//     if(res.ok){
//         const newFave = await res.json()
//         console.log('!!!!!!!!!!!!!!!!add fave thunk:', newFave)
//         dispatch(addUserFave(newFave))
//         return res;
//     }
// }

// // delete a fave
// const DELETE_FAVE = 'faves/DELETE_FAVE'

// const deleteFave = (fave) => {
//     return {
//         type: DELETE_FAVE,
//         fave,
//     }
// }

// export const deleteFaveThunk = (imageId, favoriteId) =>async(dispatch) => {
//     console.log('in the fave delete thunk^^^^^^^^^^^^^^^^')
//     console.log('currentfaveId--------->>>>>>>>>', favoriteId)
//     const res = await fetch(`/api/images/${imageId}/favorites/${favoriteId}/delete`,{
//         method: "DELETE",
//       })


//     if(res.ok){
//         const fave = await res.json()
//         console.log('DELETE thunk:', fave)
//         dispatch(deleteFave(fave))
//         return res;
//     }
// }


// // ----------------- Reducer --------------------

// const initialState = {};

// const favorites = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_ALL_FAVES:
//             // const banana = {...state}
//             // action.faves.imageFaves.forEach((fave) => {
//             //     banana[fave.id] = fave
//             // })
//             // return banana;
//             const banana = {...state, imagefaves: {}}
//             action.faves.imageFaves.forEach((fave) => {
//                 banana.imagefaves[fave.id] = fave
//             })
//             return banana;
//         case GET_USER_FAVES:
//             // const apple = {...state}
//             // action.faves.userFaves.forEach((fave) => {
//             //     apple[fave.id] = fave
//             // })
//             // return apple;
//             const apple = {...state, userfaves: {}, eachFaveImage: {}}
//             action.faves.userFaves.forEach((fave) => {
//                 apple.userfaves[fave.id] = fave
//             })
//             action.faves.eachUserFaveImage.forEach((fave) => {
//                 apple.eachFaveImage[fave.id] = fave
//             })
//             return apple;
//         case ADD_USER_FAVE:
//             // const fave = {
//             //     ...state, [action.fave.id]: action.fave
//             // }
//             // return fave;

//             // ------backend return no new id of newly created like-----------

//             // const test = {...state.userfaves, ...state.imagefaves};
//             // action.fave.newFave.forEach(
//             //     (fave) => {test.userfaves[fave.id] = fave;
//             //         test.imagefaves[fave.id] = fave
//             //     });
//             // return test;
//             // ----------------
//             const test = {...state.userfaves};
//             action.fave.newFave.forEach(
//                 (fave) => (test[fave.id] = fave));
//             return test;

//         case DELETE_FAVE:
//             const test1 = {...state};
//             console.log('************in the reducer')
//             console.log(test1)
//             delete test1[action.fave];
//             return test1;


//         default:
//             return state;
//     }
// }


// export default favorites;
