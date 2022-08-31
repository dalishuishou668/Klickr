import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getImageFavesThunk, getUserFavesThunk, addUserFaveThunk } from '../../store/favorite';
// import { NavLink, useHistory } from 'react-router-dom';
// import { useParams } from 'react-router';

function Fave({ imageId }) {

    const dispatch = useDispatch();

    const allfaves = useSelector(state => state?.favorites?.imagefaves);
    console.log('child----------', allfaves)
    // const allfavesArr = Object.values(allfaves);

    useEffect(() => {
        dispatch(getImageFavesThunk(imageId));
    }, [dispatch, imageId]);


    return (
        <div>
            {/* <p>{allfavesArr?.length}</p> */}
        </div>
    )

}

export default Fave;
