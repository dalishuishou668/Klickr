import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserAlbumsThunk } from '../../store/album';
import { createAlbumThunk } from '../../store/album';


function UserAlbumsPage() {

    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id

    const allUserAlbums = useSelector(state => state.albums)
    const userAlbumsArr = Object.values(allUserAlbums)

    const [showCreate, setShowCreate] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState([])


    useEffect(() => {
        dispatch(getUserAlbumsThunk(userId))
    }, [dispatch])

    const handleCreateSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            userId,
            title,
        };
        await dispatch(createAlbumThunk(payload, userId))
        history.push('/your-albums')

    }


    return (
        <div>
            <h1>Albums Page</h1>
            <button onClick={() => setShowCreate(true)}>Create an album</button>
            <div className='allUserImgsContainer'>
                {userAlbumsArr && userAlbumsArr.map((album) => (
                    <div>
                        <NavLink to={`/albums/${album.id}/images`}>
                            <p>{album.title}</p>
                        </NavLink>
                    </div>
                ))}

            </div>
            <div className='createAlbumFormContainer'>
                {showCreate ? (<div>
                    <form onSubmit={handleCreateSubmit} className='form'>
                        <div>
                            <ul className="errors">
                                {errors.map(error => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        </div>
                        <input
                            className='createAlbumInput'
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}>
                        </input>
                        <button type="submit" disabled={!!errors.length}>Create Album</button>
                    </form>
                </div>) : (<></>)}

            </div>


        </div>
    )

}

export default UserAlbumsPage;
