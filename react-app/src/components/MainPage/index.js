import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImagesThunk } from "../../store/image";
import { getNotFollowsThunk, getUserFollowsThunk } from "../../store/follow";
import { getAllUsersThunk } from "../../store/user";
import Footer from '../Footer';
import './MainPage.css'

function MainPage() {

    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state?.session?.user?.id);

    const allDbImages = useSelector(state => state?.images)
    const ImageArr = Object.values(allDbImages).slice(0, 8)

    const allUsers = useSelector(state => state.users)
    const usersArr = Object.values(allUsers)
    console.log('userARR^^^^^^^^^^:', usersArr)

    // // ------------------ test 2 -----------------
    // const followState = useSelector(state => state?.follows)
    // // console.log('follows:', followState)
    // const followsArr = (Object.values(followState))
    // console.log('!!!!!!!!!!!followsArr:', followsArr)

    // let followTestList = []
    // if (followState) {

    //     // const followsArr = (Object.values(followState))
    //     // console.log('!!!!!!!!!!!followsArr:', followsArr)
    //     followsArr.forEach(user => {
    //         if (user.username) {
    //             followTestList.push(user)
    //         }
    //     })
    // }

    // let resultArr = []
    // if (followsArr) {
    //     for (let i = 0; i < usersArr.length; i++) {
    //         if (usersArr[i].id !== userId && usersArr[i].id !== followsArr[1]?.id)
    //             resultArr.push(usersArr[i])
    //     }
    //     console.log("result@@@@@@@@@@@", resultArr)

    // }




    // -------------------- test 3 -----------------------

    const followdata = useSelector(state => state?.follows)
    console.log('followData', followdata)
    const userFollowers = useSelector(state => state?.follows?.followers)

    let idArr = []
    let userFollowersArr;
    if (userFollowers) {
        console.log('userFollowers:', userFollowers)
        userFollowersArr = Object.values(userFollowers)
        for (let k = 0; k < userFollowersArr.length; k++) {
            idArr.push(userFollowersArr[k].id)
        }

    }

    console.log('idArr------', idArr)

    let userFollowingArr;
    const userFollowing = useSelector(state => state?.follows?.following)
    if (userFollowing) {
        console.log('userFollowing', userFollowing)
        userFollowingArr = Object.values(userFollowing)
    }

    let wantoFollow = []
    for (let i = 0; i < usersArr.length; i++) {
        if (!idArr.includes(usersArr[i].id) && usersArr[i].id !== userId) {
            wantoFollow.push(usersArr[i])
        }

    }

    console.log("result@@@@@@@@@@@", wantoFollow)

    // let wantoFollow = []
    // if (userFollowersArr) {
    //     for (let i = 0; i < usersArr.length; i++) {
    //         for (let j = 0; j < userFollowersArr.length; j++) {

    //             console.log('iiiiiiiiii', i)
    //             console.log('jjjjjjj', j)
    //             console.log('userId:::::', userId)
    //             console.log('usersArr[i]?.id ------------>', usersArr[i], usersArr[i]?.id)
    //             console.log('userFollowersArr[j]?.id------------>', userFollowersArr[j], userFollowersArr[j]?.id)
    //             console.log('Equality**********111*********', usersArr[i].id !== userId)
    //             console.log('Equality**********222*********', usersArr[i].id !== userFollowersArr[j]?.id)
    //             console.log('Equality**********333*********', usersArr[i].id !== userId && usersArr[i].id !== userFollowersArr[j]?.id)

    //             if (usersArr[i].id !== userId && usersArr[i].id !== userFollowersArr[j]?.id) {

    //                 wantoFollow.push(usersArr[i])
    //                 console.log("result@@@@@@@@@@@", wantoFollow)
    //             }

    //         }

    //     }
    //     console.log("result@@@@@@@@@@@", wantoFollow)
    //     // return wantoFollow;

    // }


    // ---------------------------------------------

    // ------------------- test1 fail--------------------
    // const notfollowState = useSelector(state => state?.follows)
    // console.log('not follows:', notfollowState)

    // let followTestList2 = []
    // if (notfollowState) {

    //     const notfollowsArr = (Object.values(notfollowState))
    //     notfollowsArr.forEach(user => {
    //         if (user.username) {
    //             followTestList2.push(user)
    //         }
    //     })
    // }
    // ---------------------------------------------------


    useEffect(() => {
        dispatch(getImagesThunk())
        dispatch(getAllUsersThunk())
        dispatch(getUserFollowsThunk(userId))
        // dispatch(getNotFollowsThunk(userId))
    }, [dispatch])

    const [showUserFollows, setShowUserFollows] = useState(false)
    const [showUserFans, setShowUserFans] = useState(false)

    return (
        <div className='mainPageOutContainer'>
            {/* <h1>My Home Page</h1> */}
            <div className='mainPageContainer'>
                <div className='recentPhoto'>
                    <h1 onClick={() => history.push('/explore')}>Recommend for you</h1>
                    <div className='recentImgContainer'>
                        {ImageArr && ImageArr.map((image) => (
                            <div className='recentPhotoli'>
                                <NavLink to={`/images/${image.id}`} className='galleryNavlink'>
                                    <img src={image.imageUrl} alt='image' className='singleImg_1'></img>
                                    {/* <p>{image.content}</p> */}
                                </NavLink>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='followsContainer'>
                    {/* <h3>people you may want to follow</h3>
                <div>
                    {resultArr.length > 0 && resultArr.map(person => (
                        <li><NavLink to={`/users/${person.id}`}>{person.username}</NavLink></li>
                    ))}
                    {resultArr.length === 0 && <li>no more person to follow</li>}

                </div> */}




                    <div className='innertitle_2'>
                        <div> + People to follow</div>
                    </div>
                    <div className='innerFollowBox'>
                        {wantoFollow && wantoFollow.map(person => (
                            <div className='personModal'>
                                <NavLink className='link8' to={`/users/${person.id}`}>
                                    <div className='modalHeadline'>
                                        <div className='modalProfilePic'>
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                        <p className='modalText'>{person.username}</p>
                                    </div>
                                    {/* <div className='modalPic'></div> */}
                                    <div>
                                        <img src={person?.background_pic} className='modalPic4'></img>
                                    </div>
                                </NavLink>
                            </div>

                        ))}
                    </div>

                    <div className='innertitle_1'>
                        {/* <i class="fa-solid fa-chevrons-right"></i> */}
                        <div onClick={() => setShowUserFollows(!showUserFollows)}> {showUserFollows ? '* People you followed' : '> People you followed'}</div>
                    </div>

                    {showUserFollows && (
                        <div className='innerFollowBox'>
                            {userFollowersArr && userFollowersArr.length > 0 && userFollowersArr.map(person => (
                                <div className='personModal'>
                                    <NavLink className='link8' to={`/users/${person.id}`}>
                                        <div className='modalHeadline'>
                                            <div className='modalProfilePic'>
                                                <i class="fa-solid fa-user"></i>
                                            </div>
                                            <p className='modalText'>{person.username}</p>
                                        </div>

                                        {/* <div className='modalPic2'></div> */}
                                        <div>
                                            <img src={person?.background_pic} className='modalPic4'></img>
                                        </div>
                                    </NavLink>

                                </div>

                            ))}
                        </div>
                    )}



                    <div className='innertitle_1'>
                        <div onClick={() => setShowUserFans(!showUserFans)}> {showUserFans ? '* People who\'re intereted in your photos' : '> People who\'re intereted in your photos'}</div>
                    </div>

                    {showUserFans && (
                        <div className='innerFollowBox'>
                            {userFollowingArr && userFollowingArr.map(person => (
                                <div className='personModal'>
                                    <NavLink className='link8' to={`/users/${person.id}`}>
                                        <div className='modalHeadline'>
                                            <div className='modalProfilePic'>
                                                <i class="fa-solid fa-user"></i>
                                            </div>
                                            <p className='modalText'>{person.username}</p>
                                        </div>
                                        {/* <div className='modalPic3'></div> */}
                                        <div>
                                            <img src={person?.background_pic} className='modalPic4'></img>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    )}


                </div>
            </div>

            <div className='footerbox'>
                <Footer />
            </div>

        </div>
    )
}

export default MainPage;
