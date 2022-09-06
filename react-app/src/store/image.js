

// GET ALL DATABASE IMAGES
const GET_ALL_IMAGES = 'images/GET_ALL_IMAGES'

const getImages = (images) => {
    return {
        type: GET_ALL_IMAGES,
        images,
    }
}

export const getImagesThunk = () =>async(dispatch) => {
    const res = await fetch('/api/images/')


    if(res.ok){
        const allDbImages = await res.json()
        console.log('thunk:', allDbImages)
        dispatch(getImages(allDbImages))
        return res;
    }
}


// GET ALL USER IMAGES
const GET_USER_IMAGES = 'images/GET_USER_IMAGES'

const getUserImages = (images) => {
    return {
        type: GET_USER_IMAGES,
        images,
    }
}

export const getUserImagesThunk = (userId) =>async(dispatch) => {
    const res = await fetch(`/api/images/${userId}/all-images`)


    if(res.ok){
        const allUserImages = await res.json()
        console.log('thunk:', allUserImages)
        dispatch(getUserImages(allUserImages))
        return res;
    }
}

// GET SINGLE IMAGE
const GET_SINGLE_IMAGE = 'images/GET_SINGLE_IMAGE'

const getSingleImage = (image) => {
    return {
        type: GET_SINGLE_IMAGE,
        image,
    }
}

export const getSingleImageThunk = (imageId) =>async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}`)


    if(res.ok){
        const image = await res.json()
        console.log('thunk:', image)
        dispatch(getSingleImage(image))
        return res;
    }
}

// CREATE AN IMAGE
const CREATE_IMAGE = 'images/CREATE_IMAGE'

const createImage = (image) => {
    return {
        type: CREATE_IMAGE,
        image,
    }
}

// ---------- AWS ------------------------
export const createImageThunk = (imageData) => async (dispatch) => {
    console.log('image---->>',imageData)

    const { userId, albumId, content, description, imageUrl, image } = imageData;
    // console.log('image2--->', image)

    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("albumId", albumId);
    formData.append("content", content);
    formData.append("description", description);
    formData.append("imageUrl", imageUrl);
    // formData.append("image", image)
    // console.log('>>>>>>>>>>>>>', Object.values(formData))

    const res = await fetch('/api/images/upload', {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: formData
    })
    // console.log('...........', res.body)

    if (res.ok) {
        const image = await res.json()
        console.log('create thunk:', image)
        dispatch(createImage(image))
        return res;
    }
}










// export const createImageThunk = (image) =>async(dispatch) => {
//     const res = await fetch('/api/images/upload',{
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(image),
//       })


//     if(res.ok){
//         const image = await res.json()
//         console.log('create thunk:', image)
//         dispatch(createImage(image))
//         return res;
//     }
// }

// EDIT AN IMAGE
const EDIT_IMAGE = 'images/EDIT_IMAGE'

const editImage = (image) => {
    return {
        type: EDIT_IMAGE,
        payload: image,
    }
}

export const editImageThunk = (payload, imageId) =>async(dispatch) => {
    console.log('in the edit thunk^^^^^^^^^^^^^^^^')
    const res = await fetch(`/api/images/${imageId}/edit`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })


      const newImage = await res.json();

      dispatch(editImage(newImage))
      return newImage;
}

// DELETE AN IMAGE
const DELETE_IMAGE = 'images/DELETE_IMAGE'

const deleteImage = (image) => {
    return {
        type: DELETE_IMAGE,
        image,
    }
}

export const deleteImageThunk = (imageId) =>async(dispatch) => {
    console.log('in the delete thunk^^^^^^^^^^^^^^^^')
    const res = await fetch(`/api/images/${imageId}/delete`,{
        method: "DELETE",
      })


    if(res.ok){
        const oldImage = await res.json()
        console.log('DELETE thunk:', oldImage)
        dispatch(deleteImage(oldImage))
        return res;
    }
}


// ---------------------- Reducer --------------------------------

const initialState = {};

const images = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_IMAGES:
            const allImages = {}
            action.images.allImages.forEach((image) => {
                allImages[image.id] = image
            })
            // action.images.eachImage.forEach((image) => {
            //     allImages[image.username] = image;
            // });
            return allImages;
        case GET_USER_IMAGES:
            const userImages = {}
            action.images.userImages.forEach((image) => {
                userImages[image.id] = image
            })
            return userImages;
        case GET_SINGLE_IMAGE:
            const newState = {...state, [action.image.id]: action.image }
            return newState;
        case CREATE_IMAGE:
            const banana = {
                ...state, [action.image.id]: action.image
            }
            return banana;
        case DELETE_IMAGE:
            const test = {...state};
            delete test[action.image];
            return test;
        case EDIT_IMAGE:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}


export default images;
