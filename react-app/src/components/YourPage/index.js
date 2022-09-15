import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import react, { useEffect, useState } from 'react';
import UserAlbumsPage from '../UserAlbumsPage';
import UserImagesPage from '../UserImagesPage';
import UserFollowsPage from '../UserFollowsPage';
import UserFavesPage from '../UserFavesPage';
import Footer from '../Footer';
import './YourPage.css';
// import Navigation from "../Navigation";

function YourPage() {

    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user);
    const userId = sessionUser.id

    const [showUserAlbums, setShowUserAlbums] = useState(false)
    const [showUserImages, setShowUserImages] = useState(true)
    const [showUserFollows, setShowUserFollows] = useState(false)
    const [showUserFaves, setShowUserFaves] = useState(false)


    return (
        <div className='yourPageContainer'>
            <div className='userProfileInfo'>
                <div className='userpagepic'>
                    <img className='userlogopic' src='../static/icons8-user3.png' alt='user_logo' />
                    {/* <img className='userlogopic' src='../static/icons8-user-pic.png' alt='user_logo' /> */}
                </div>

                <div className='userpageinfo'>
                    <p>{sessionUser?.username}</p>
                    <p>{sessionUser?.email}</p>
                </div>

                {/* <img src={sessionUser?.profile_pic} alt='image' className='singleImg'></img> */}

            </div>
            <div className='userProfileNavbar'>
                <button className='userProfileBtn'
                    onClick={() => {
                        setShowUserImages(true)
                        setShowUserAlbums(false)
                        setShowUserFaves(false)
                        // setShowUserFollows(false)
                    }}
                >Your Images</button>
                <button className='userProfileBtn'
                    onClick={() => {
                        setShowUserAlbums(true)
                        setShowUserFaves(false)
                        setShowUserImages(false)
                        // setShowUserFollows(false)

                    }}
                >Your Albums</button>

                <button className='userProfileBtn'
                    onClick={() => {
                    setShowUserFaves(true)
                    setShowUserImages(false)
                    setShowUserAlbums(false)
                    // setShowUserFollows(false)
                }}
                >Your Favorites</button>
                {/* <button onClick={() => {
                    setShowUserFollows(true)
                    setShowUserFaves(false)
                    setShowUserImages(false)
                    setShowUserAlbums(false)
                }}
                >Your Follows</button> */}
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
