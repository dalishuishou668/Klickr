
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { createImageThunk } from '../../store/image';
// import { getAllTagsThunk } from '../../store/tag';
import { getUserAlbumsThunk } from '../../store/album';
import './Upload.css';

function Upload() {
    const dispatch = useDispatch();
    const history = useHistory()
    const userId = useSelector(state => state?.session.user?.id);
    // const tags = useSelector(state => state?.tags)
    // const tagsArr = Object.values(tags)


    const albums = useSelector(state => state.albums)
    const albumsArr = Object.values(albums)
    console.log('albumsArr:', albumsArr)

    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    // const [tagId, setTagId] = useState('');
    const [albumId, setAlbumId] = useState('');
    console.log('select albumId***', albumId)
    // console.log('select tagId-------', tagId)

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        // dispatch(getAllTagsThunk())
        dispatch(getUserAlbumsThunk(userId))
    }, [dispatch])



    let regexUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/;
    let regex1 = /\.(jpg|jpeg|png|gif)$/
    const [image, setImage] = useState(null);

    useEffect(() => {
        const errors = [];
        console.log('image name', image?.name)
        if (content.length < 2 || content.length > 60 || !(regex1.test(content))) errors.push('Content: content must be ad least 2 characters and less than 60 characters');
        if (description.length < 2 || !(regex1.test(content)) || description.length > 500) errors.push('Description: description must be ad least 2 characters and less than 500 characters');
        // if (!tagId) errors.push('Please select a tag');
        if (!albumId) errors.push('Album: album must be selected');
        if (!(regex1.test(image?.name))) {
            errors.push("File: please select a valid image file(e.g. png/jpg/jpeg)")
        }
        // if (!regexUrl.test(imageUrl)) {
        //     errors.push('Please provide imageurl starts with http and ends in jpg or png')
        // }
        setErrors(errors);
    }, [content, description, albumId, image?.name])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            albumId,
            content,
            description,
            imageUrl: image,
            // image
            // tagId
        };

        const post = await dispatch(createImageThunk(payload))
        // console.log('post:', post)
        // .then(() => dispatch(getUserImages(userId)))
        if (post) history.push(`/explore`)

        // if (post) history.push('/')
    };


    // ------------ aws ------------------------------

    // const [image, setImage] = useState(null);

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        console.log('file---->>>>:', file)
    }


    return (

        <form onSubmit={handleSubmit} className='uploadimgContainer'>
            <div className='uploadForm'>

                <h3 className='uploadTitle'> Upload a new photo </h3>

                <div>
                    <ul className="errors">
                        {errors.map(error => (
                            <li className='err' key={error}>* {error}</li>
                        ))}
                    </ul>
                </div>
                <div className='uploadForm1'>
                    <div>
                        <label>Content: </label>
                        <input
                            className='uploadInput'
                            type="text"
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input
                            className='uploadInput'
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    {/* <div className='tagDropdown'>
                        <label for="tag-select">Choose a tag:</label>
                            <select
                                onChange={(e) => setTagId(e.target.value)}
                                value={tagId}
                            >
                                <option value="">--Please choose an option--</option>
                                {tagsArr.map(tag =>
                                    <option value={tag.id} key={tag.id}>{tag.name}</option>
                                )}
                            </select>
                    </div> */}
                    <div className='albumDropdown'>
                        <label for="album-select">Choose an album:</label>
                        <select
                            className='uploadInput2'
                            onChange={(e) => setAlbumId(e.target.value)}
                            value={albumId}
                        >
                            <option className='uploadInput1' value="">--Please choose an option--</option>
                            {albumsArr.map(album =>
                                <option className='uploadInput1' value={album.id} key={album.id}>{album.title}</option>
                            )}
                        </select>

                    </div>
                    <div>
                        <input
                            className='uploadInput'
                            type="file"
                            // accept="image/*"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={updateImage}
                        />
                    </div>
                    {/* <div>
                            <input
                                className='uploadInput'
                                type="text"
                                placeholder="Image URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)} />
                        </div> */}
                    <button className='uploadButton' type="submit" disabled={!!errors.length}>Create new photo</button>
                </div>
            </div>
        </form>)

}


export default Upload;






// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal'
// import UploadImageForm from './UploadImageForm';
// import './Upload.css'


// function UploadModal() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//     <button className='uploadBtn1' onClick={() => setShowModal(true)}><i class="fa-solid fa-arrow-up"></i></button>

//       {showModal &&
//         (<Modal onClose={() => setShowModal(false)}>
//           <UploadImageForm closeModal={() => setShowModal(false)} />
//         </Modal>
//         )}
//     </>
//   );
// }

// export default UploadModal;
