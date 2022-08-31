import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { createImageThunk } from '../../store/image';
import { getAllTagsThunk } from '../../store/tag';
import { getUserAlbumsThunk } from '../../store/album';

function Upload() {
    const dispatch = useDispatch();
    const history = useHistory()
    const userId = useSelector(state => state?.session.user?.id);
    const tags = useSelector(state => state?.tags)
    const tagsArr = Object.values(tags)


    const albums = useSelector(state => state.albums)
    const albumsArr = Object.values(albums)
    console.log('albumsArr:', albumsArr)

    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [tagId, setTagId] = useState('');
    const [albumId, setAlbumId] = useState('');
    console.log('select albumId***', albumId)
    console.log('select tagId-------', tagId)

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getAllTagsThunk())
        dispatch(getUserAlbumsThunk(userId))
    }, [dispatch])



    useEffect(() => {
        const errors = [];
        if (content.length < 1) errors.push('Please provide valid values');
        if (description.length < 1) errors.push('Please provide valid description');
        if (!tagId) errors.push('Please select a tag');
        if (!albumId) errors.push('Please select an album');
        if (imageUrl.length < 10) {
            errors.push('Please provide valid url')
        }
        setErrors(errors);
    }, [content, imageUrl, description, tagId, albumId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            albumId,
            tagId,
            content,
            description,
            imageUrl,
        };

        const post = await dispatch(createImageThunk(payload))
        // console.log('post:', post)
        // .then(() => dispatch(getUserImages(userId)))
        if (post) history.push(`/your-images`)
        // if (post) history.push('/')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='uploadForm'>
                    <div className='title'>
                        <h3> Upload a new photo </h3>
                    </div>
                    <div>
                        <ul className="errors">
                            {errors.map(error => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='uploadForm'>
                        <div>
                            <input
                                className='uploadInput'
                                type="text"
                                placeholder="Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)} />
                        </div>
                        <div>
                            <input
                                className='uploadInput'
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className='tagDropdown'>
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
                        </div>
                        <div className='albumDropdown'>
                            <label for="album-select">Choose an album:</label>
                            <select
                                onChange={(e) => setAlbumId(e.target.value)}
                                value={albumId}
                            >
                                <option value="">--Please choose an option--</option>
                                {albumsArr.map(album =>
                                    <option value={album.id} key={album.id}>{album.title}</option>
                                )}
                            </select>

                        </div>
                        <div>
                            <input
                                className='uploadInput'
                                type="text"
                                placeholder="Image URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)} />
                        </div>
                        <button className='uploadButton' type="submit" disabled={!!errors.length}>Create new photo</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Upload;
