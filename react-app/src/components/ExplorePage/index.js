import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getImagesThunk } from '../../store/image';
import { getAllUsersThunk } from '../../store/user';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer';
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
        <div className='homepageContainer'>
            <NavBar />
            <h1>Explore</h1>
            <div className='allImgsContainer'>
                <div className='container-all'>

                    {/* </div> */}
                    {ImageArr && ImageArr.map((image) => (
                        <div>



                            {/* <div class="container-all"> */}
                            <div class="container" onClick={() => history.push(`/images/${image?.id}`)}>
                                <img src={image?.imageUrl} alt='image' className='singleImg img2'></img>
                                <span class="title"> {image?.content}</span>
                                <span class="text"> by {getUsername(image?.userId)}</span>

                            </div>
                            {/* </div> */}





                            {/* <figure class="hover-img" onClick={() => history.push(`/images/${image?.id}`)}>
                            <img src={image?.imageUrl} alt='image' className='singleImg'></img>
                            <figcaption>
                                <p className='imageCreator1'>{image?.content}</p>
                                <p>by {getUsername(image?.userId)}</p>
                            </figcaption>
                        </figure> */}


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

        </div>
    )
}

export default ExplorePage;
