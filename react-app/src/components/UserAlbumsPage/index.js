import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserAlbumsThunk } from '../../store/album';
import { createAlbumThunk } from '../../store/album';
import './UserAlbumsPage.css'


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
        setTitle('')
        // history.push('/your-albums')

    }

    useEffect(() => {
        let errors = [];

        if (title.length < 3) {
          errors.push('Please provide title with at least 3 chracters.')
        }
        setErrors(errors);

      }, [title])


    return (
        <div>
            <h1>Your Albums</h1>
            <button onClick={() => setShowCreate(true)}>Create an album</button>
            <div className='createAlbumFormContainer'>
                {showCreate ? (<div>
                    <form onSubmit={handleCreateSubmit} className='form'>
                        <div>
                            <ul className="errors">
                                {errors.map(error => (
                                    <li className='err' key={error}>* {error}</li>
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
                        <button onClick={() => setShowCreate(false)}>Back</button>
                    </form>
                </div>) : (<></>)}

            </div>
            <div className='allUserAlbumsContainer'>
                {userAlbumsArr && userAlbumsArr.map((album) => (
                    <div className='singleAlbumlink1'>
                        <NavLink className='singleAlbumlink' to={`/albums/${album.id}/images`}>
                            <div className='singleAlbumpic'>{album.title}🌴</div>
                        </NavLink>
                    </div>
                ))}

            </div>



        </div>
    )

}

export default UserAlbumsPage;

