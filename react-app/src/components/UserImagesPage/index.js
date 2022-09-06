import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserImagesThunk } from '../../store/image';
import './UserImagesPage.css'

function UserImagesPage() {


    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    console.log("sessionUser:", sessionUser)
    const userId = sessionUser.id

    const allUserImages = useSelector(state => state.images)
    console.log('allUserImages:', allUserImages)
    const userImageArr = Object.values(allUserImages)

    useEffect(() => {
        dispatch(getUserImagesThunk(userId))
    }, [dispatch])

    return (
        <div >

            {/* <div className='allUserImgsContainer'>
                {userImageArr && userImageArr.map((image) => (
                    <div>
                        <NavLink to={`/images/${image.id}`}>
                            <img src={image.imageUrl} alt='image' className='singleImg'></img>
                            <p>{image.content}</p>
                        </NavLink>
                    </div>
                ))}
            </div> */}
            {/* <div> */}
                {userImageArr ? (<div className='userimagesContainer'>
                    {userImageArr.map((image) => (
                    <div>
                        <NavLink class="circle" to={`/images/${image.id}`}>
                            <img className='indiImg2' src={image.imageUrl} alt='image'></img>
                            {/* <p>{image.content}</p> */}
                        </NavLink>
                    </div>))}
                </div>) : (<div>Start create your images</div>)}
            {/* </div> */}
        </div>
    )

}

export default UserImagesPage;
