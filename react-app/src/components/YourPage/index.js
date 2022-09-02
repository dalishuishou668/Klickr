import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import react, { useEffect, useState } from 'react';
import UserAlbumsPage from '../UserAlbumsPage';
import UserImagesPage from '../UserImagesPage';
import UserFollowsPage from '../UserFollowsPage';
import UserFavesPage from '../UserFavesPage';
// import Navigation from "../Navigation";

function YourPage() {

    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user);
    const userId = sessionUser.id

    const [showUserAlbums, setShowUserAlbums] = useState(false)
    const [showUserImages, setShowUserImages] = useState(false)
    const [showUserFollows, setShowUserFollows] = useState(false)
    const [showUserFaves, setShowUserFaves] = useState(false)


    return (
        <div className='yourPageContainer'>
            <div className='userProfileNavbar'>
                <button onClick={() => {
                    setShowUserAlbums(true)
                    setShowUserFaves(false)
                    setShowUserImages(false)
                    // setShowUserFollows(false)

                }}
                >Your Albums</button>
                <button onClick={() => {
                    setShowUserImages(true)
                    setShowUserAlbums(false)
                    setShowUserFaves(false)
                    // setShowUserFollows(false)
                }}
                >Your Images</button>
                {/* <button onClick={() => {
                    setShowUserFaves(true)
                    setShowUserImages(false)
                    setShowUserAlbums(false)
                    // setShowUserFollows(false)
                }}
                >Your Favorites</button> */}
                {/* <button onClick={() => {
                    setShowUserFollows(true)
                    setShowUserFaves(false)
                    setShowUserImages(false)
                    setShowUserAlbums(false)
                }}
                >Your Follows</button> */}
            </div>
            {/* <Navigation /> */}
            <div className='userProfileInfo'>
                <img src='../static/icons8-user-pic.png' alt='user_logo' />
                <p>{sessionUser?.username}</p>
                <p>{sessionUser?.email}</p>
                {/* <img src={sessionUser?.profile_pic} alt='image' className='singleImg'></img> */}

            </div>

            <div className='yourAlbums'>
                {showUserAlbums ? (<div>
                    <UserAlbumsPage />
                </div>) : (<></>)}
            </div>
            <div className='yourPhotos'>
                {showUserImages ? (
                    <div>
                        <UserImagesPage />
                    </div>
                ) : (<></>)}
            </div>
            <div className='yourFaves'>
                {showUserFaves ? (
                    <div>
                        <UserFavesPage />
                    </div>
                ) : (<></>)}
            </div>
            {/* <div className='yourFollows'>
                {showUserFollows ? (<div>
                    <UserFollowsPage />
                </div>) : (<></>)}

            </div> */}

        </div>
    )
}

export default YourPage;
