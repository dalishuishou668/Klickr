// GET ALL TAGS IN DB


const GET_ALL_TAGS = 'images/GET_ALL_TAGS'

const getAllTags = (tags) => {
    return {
        type: GET_ALL_TAGS,
        tags,
    }
}

export const getAllTagsThunk = () =>async(dispatch) => {
    const res = await fetch('/api/tags/')


    if(res.ok){
        const alltags = await res.json()
        console.log('tag thunk:', alltags)
        dispatch(getAllTags(alltags))
        return res;
    }
}

// GET SINGLE ALBUM
const GET_SINGLE_IMAGES = 'images/GET_SINGLE_IMAGES'

// CREATE AN ALBUM
const CREATE_IMAGE = 'images/CREATE_IMAGE'

// EDIT AN ALBUM
const EDIT_IMAGE = 'images/EDIT_IMAGE'

// DELETE AN ALBUM
const DELETE_IMAGE = 'images/DELETE_IMAGE'


// ---------------------- Reducer --------------------------------

const initialState = {};

const tags = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TAGS:
            const banana = {}
            action.tags.alltags.forEach((tag) => {
                banana[tag.id] = tag
            })
            return banana;
        default:
            return state;
    }
}


export default tags;
