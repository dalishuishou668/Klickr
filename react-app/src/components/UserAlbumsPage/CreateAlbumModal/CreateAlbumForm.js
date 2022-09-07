import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createAlbumThunk } from '../../../store/album';
import '../UserAlbumsPage.css'



function CreateAlbumForm({ setShowModal }) {

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id

    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState([])

    const handleCreateSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            userId,
            title,
        };
        await dispatch(createAlbumThunk(payload, userId))
        setTitle('')
        setShowModal(false)

    }


    useEffect(() => {
        let errors = [];

        if (title.length < 3) {
            errors.push('Please provide title with at least 3 chracters.')
        }
        setErrors(errors);

    }, [title])


    return (
        <form onSubmit={handleCreateSubmit} className='form'>
            <div>
                <ul className="errors">
                    {errors.map(error => (
                        <li className='err' key={error}>* {error}</li>
                    ))}
                </ul>
            </div>
            <div className='createAlbumFrom2'>
                <input
                    className='createAlbumInput'
                    type="text"
                    placeholder="Enter Title Here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                </input>
                <button className='createAlbumBtn1' type="submit" disabled={!!errors.length}>Save</button>
                {/* <button className='createAlbumBtn1' onClick={() => setShowCreate(false)}>Back</button> */}
            </div>

        </form>
    )
}


export default CreateAlbumForm
