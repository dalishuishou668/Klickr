

// GET ALL COMMENTS OF AN IMAGE
const GET_IMAGE_COMMENTS = 'comments/GET_IMAGE_COMMENTS'

const getImageComments = (comments) => {
    return {
        type: GET_IMAGE_COMMENTS,
        comments
    }
}

export const getImageCommentsThunk = (imageId) =>async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}/comments`)


    if(res.ok){
        const allcomments = await res.json()
        console.log('all image comments thunk ------>>>>>>>>>>:', allcomments)
        dispatch(getImageComments(allcomments))
        return res;
    }
}




// GET SINGLE IMAGE
// const GET_SINGLE_IMAGE = 'images/GET_SINGLE_IMAGE'

// const getSingleImage = (image) => {
//     return {
//         type: GET_SINGLE_IMAGE,
//         image,
//     }
// }

// export const getSingleImageThunk = (imageId) =>async(dispatch) => {
//     const res = await fetch(`/api/images/${imageId}`)


//     if(res.ok){
//         const image = await res.json()
//         console.log('thunk:', image)
//         dispatch(getSingleImage(image))
//         return res;
//     }
// }

// ADD A COMMENT
const ADD_COMMENT = 'comments/ADD_COMMENT'

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment,
    }
}

export const addCommentThunk = (imageId, comment) =>async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}/comments/create`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      })


    if(res.ok){
        const comment = await res.json()
        console.log('add comment thunk:', comment)
        dispatch(addComment(comment))
        return res;
    }
}


// EDIT AN IMAGE
const EDIT_COMMENT = 'comments/EDIT_COMMENT'

const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        payload: comment,
    }
}

export const editCommentThunk = (payload, imageId, commentId) =>async(dispatch) => {
    console.log('in the edit thunk^^^^^^^^^^^^^^^^')
    const res = await fetch(`/api/images/${imageId}/comments/${commentId}/edit`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })


      const newComment = await res.json();

      dispatch(editComment(newComment))
      return newComment;
}


// DELETE AN IMAGE
const DELETE_COMMENT = 'comments/DELETE_COMMENT'

const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment,
    }
}

export const deleteCommentThunk = (imageId, commentId) =>async(dispatch) => {
    console.log('in the delete thunk^^^^^^^^^^^^^^^^')
    const res = await fetch(`/api/images/${imageId}/comments/${commentId}/delete`,{
        method: "DELETE",
      })


    if(res.ok){
        const oldComment = await res.json()
        console.log('DELETE thunk:', oldComment)
        dispatch(deleteComment(oldComment))
        return res;
    }
}


// ---------------------- Reducer --------------------------------

const initialState = {};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGE_COMMENTS:
            const apple = {}
            action.comments.imageComments.forEach((comment) => {
                apple[comment.id] = comment
            })
            // action.comments.eachComment.forEach((comment) => {
            //     apple[comment.username] = comment;
            // });
            return apple
        case ADD_COMMENT:
            return {...state, [action.comment.id]: action.comment}
        case EDIT_COMMENT:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_COMMENT:
            const test = {...state};
            delete test[action.comment.id];
            return test;
        default:
            return state;
    }
}


export default comments;
