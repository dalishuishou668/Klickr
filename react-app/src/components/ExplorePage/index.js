import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getImagesThunk } from '../../store/image';
import { getAllUsersThunk } from '../../store/user';
import './ExplorePage.css';


function ExplorePage() {

    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user);
    const allDbImages = useSelector(state => state?.images)

    const ImageArr = Object.values(allDbImages)
    console.log('ImageArr', ImageArr)

    const allUsers = useSelector(state => state?.users)
    const usersArr = Object.values(allUsers)
    console.log('userARR^^^^^^^^^^:', usersArr)

    useEffect(() => {
        dispatch(getImagesThunk())
        dispatch(getAllUsersThunk())
    }, [dispatch])

    const getUsername = (userId) => {
        if (usersArr) {
            let result = usersArr.filter(user => user.id === userId);
            console.log('result:', result[0]?.username)
            return result[0]?.username
        }

    }

    return (
        <div>
            <h1>Homepage: view all images in the database</h1>
            <div className='allImgsContainer'>
                {ImageArr && ImageArr.map((image) => (
                    <div>
                        <figure class="hover-img" onClick={() => history.push(`/images/${image?.id}`)}>
                            <img src={image?.imageUrl} alt='image' className='singleImg'></img>
                            <figcaption>
                                <p>{image?.content}</p>
                                <p>by {getUsername(image?.userId)}</p>
                            </figcaption>
                        </figure>
                        {/* <figure className='photo-display' onClick={() => history.push(`/images/${image?.id}`)}>
                            <img src={image?.imageUrl} alt='image' className='singleImg'></img>
                            <div className='photo-overlay'>
                                <div className='photo-info'>
                                    <p className='photo-title'>{image?.content}</p>
                                    <p className='photo-username'>by {getUsername(image?.userId)}</p>
                                </div>
                            </div>
                        </figure> */}


                    </div>
                ))}

            </div>


        </div>
    )
}

export default ExplorePage;
