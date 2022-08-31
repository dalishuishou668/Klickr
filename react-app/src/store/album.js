
// GET ALL ALBUM IMAGES
const GET_USER_ALBUMS = 'albums/GET_USER_ALBUMS'

const getUserAlbums = (albums) => {
    return {
        type: GET_USER_ALBUMS,
        albums,
    }
}

export const getUserAlbumsThunk = (userId) =>async(dispatch) => {
    const res = await fetch(`/api/albums/${userId}`)


    if(res.ok){
        const allUserAlbums = await res.json()
        console.log('thunk:', allUserAlbums)
        dispatch(getUserAlbums(allUserAlbums))
        return res;
    }
}

// GET SINGLE ALBUM
const GET_SINGLE_ALBUM = 'albums/GET_SINGLE_ALBUM'

const getSingleAlbum = (album) => {
    return {
        type: GET_SINGLE_ALBUM,
        album,
    }
}

export const getSingleAlbumThunk = (albumId) =>async(dispatch) => {
    const res = await fetch(`/api/albums/${albumId}/images`)

    console.log('single albun images THUNK^^^^^^^^^^')
    if(res.ok){
        const album = await res.json()
        console.log('single album thunk:', album)
        dispatch(getSingleAlbum(album))
        return res;
    }
}

// CREATE AN ALBUM
const CREATE_ALBUM = 'albums/CREATE_ALBUM'

const createAlbum = (album) => {
    return {
        type: CREATE_ALBUM,
        album,
    }
}

export const createAlbumThunk = (album) =>async(dispatch) => {
    const res = await fetch(`/api/albums/create`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
      })


    if(res.ok){
        const newAlbum = await res.json()
        console.log('create thunk:', newAlbum)
        dispatch(createAlbum(newAlbum))
        return res;
    }
}



// EDIT AN ALBUM
const EDIT_ALBUM = 'albums/EDIT_ALBUM'

const editAlbum = (album) => {
    return {
        type: EDIT_ALBUM,
        payload: album,
    }
}

export const editAlbumThunk = (payload, albumId) =>async(dispatch) => {
    console.log('in the edit thunk^^^^^^^^^^^^^^^^')
    const res = await fetch(`/api/albums/${albumId}/edit`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })

      const album = await res.json();
      dispatch(editAlbum(album))
      return album;
}

// DELETE AN ALBUM
const DELETE_ALBUM = 'albums/DELETE_ALBUM'

const deleteAlbum = (album) => {
    return {
        type: DELETE_ALBUM,
        album,
    }
}

export const deleteAlbumThunk = (albumId) =>async(dispatch) => {
    console.log('in the delete thunk^^^^^^^^^^^^^^^^')
    const response = await fetch(`/api/albums/${albumId}/delete`,{
        method: "DELETE",
      })


    if(response.ok){
        const oldAlbum = await response.json()
        console.log('DELETE thunk:', oldAlbum)
        dispatch(deleteAlbum(oldAlbum))
        return response;
    }
}



// ---------------------- Reducer --------------------------------

const initialState = {};

const albums = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ALBUMS:
            const allAlbums = {}
            action.albums.userAlbums.forEach((album) => {
                allAlbums[album.id] = album
            })
            return allAlbums;
        case GET_SINGLE_ALBUM:
            console.log("in the reducer!!!!!!!!!!!!!")
            console.log(action.album)
            // const newState = {...state, [action.album.id]: action.album }
            const newState = {...state, test1: action.album }
            return newState;
        case CREATE_ALBUM:
            const newState1 = {...state, [action.album.id]: action.album }
            return newState1;
        case EDIT_ALBUM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_ALBUM:
            const test = {...state};
            delete test[action.album];
            return test;
        default:
            return state;
    }
}


export default albums;
