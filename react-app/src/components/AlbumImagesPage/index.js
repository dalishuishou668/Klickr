import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { getSingleAlbumThunk, editAlbumThunk, deleteAlbumThunk, getUserAlbumsThunk } from '../../store/album';
import './AlbumImagesPage.css'

function AlbumImagesPage() {

    const history = useHistory()
    const { albumId } = useParams();
    const dispatch = useDispatch()
    const albums = useSelector(state => state?.albums?.test1?.images)
    const albumInfo = useSelector(state => state?.albums[albumId])

    console.log("***********albums**********:", albums)
    console.log("***********albums info**********:", albumInfo)
    // console.log('album images:', albums[albumId].images)
    // const albumImgArr = albums.?albumId?.images


    // const albumImgArr = useSelector(state => state.albums[albumId]?.images)
    // console.log('arr:', albumImgArr)




    // lose state after refresh the page --------------- need debugging
    const [showEditAlbum, setShowEditAlbum] = useState(false)
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState('')
    const sessionUser = useSelector(state => state?.session?.user);
    const userId = sessionUser?.id

    const handleEditAlbum = async (e) => {
        e.preventDefault()

        const payload = {
            userId,
            title
        }
        await dispatch(editAlbumThunk(payload, albumId))
    }

    const handleDeleteAlbum = async(e) => {
        e.preventDefault()

        await dispatch(deleteAlbumThunk(albumId))
        history.push('/your-albums')

    }



    useEffect(() => {
        dispatch(getUserAlbumsThunk(userId))
        dispatch(getSingleAlbumThunk(albumId))

    }, [dispatch])


    return (
        <div className='albumImgContainer'>
            <h1>THIS is single album images page</h1>

            <div>
                {albumInfo && (<h3>{albumInfo?.title}</h3>)}
                {/* {albums && (
                    <h3>{albums[0]?.title}</h3>
                )} */}
            </div>
            {/* <h3>{albums[albumId]?.title}</h3> */}
            <button onClick={() => setShowEditAlbum(true)}>Edit album</button>
            <button onClick={handleDeleteAlbum}>Delete Album</button>
            <div className='editAlbumContainer'>
                {showEditAlbum ? (<div>
                    <form onSubmit={handleEditAlbum} className='form'>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}>
                        </input>
                        <button type="submit" disabled={!!errors.length}>Edit</button>
                    </form>
                </div>) : (<></>)}


            </div>
            {/* <div>
                {albums ? (<div>
                    {albums.map((image) => (
                        <div>
                            <NavLink to={`/images/${image.id}`}>
                                <img src={image.imageUrl} alt='image' className='indiImg'></img>
                                <p>{image.content}</p>
                            </NavLink>

                        </div>
                    ))}
                </div>) : (<div>No images in the album</div>)}
            </div> */}
            <div>
                {albums && albums.map((image) => (
                    <div>
                        <NavLink to={`/images/${image.id}`}>
                            <img src={image?.imageUrl} alt='image' className='indiImg'></img>
                            <p>{image?.content}</p>
                        </NavLink>

                    </div>
                ))
                }
            </div>


        </div>
    )



}

export default AlbumImagesPage;