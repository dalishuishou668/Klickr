import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getImagesThunk } from '../../store/image';
import { getAllUsersThunk } from '../../store/user';
import './ExplorePage.css';


function ExplorePage() {

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
                        <NavLink to={`/images/${image?.id}`}>
                            <img src={image?.imageUrl} alt='image' className='singleImg'></img>
                            <p>{image?.content}</p>
                            {/* <p>by {getUsername(image.userId)}</p> */}
                        </NavLink>
                        <p>by {getUsername(image?.userId)}</p>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default ExplorePage;
