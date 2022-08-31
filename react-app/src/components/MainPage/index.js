// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getImagesThunk } from "../../store/image";
// import { getNotFollowsThunk, getUserFollowsThunk } from "../../store/follow";
// import { getAllUsersThunk } from "../../store/user";
// import './MainPage.css'

// function MainPage() {

//     const dispatch = useDispatch()
//     const userId = useSelector(state => state?.session?.user?.id);

//     const allDbImages = useSelector(state => state?.images)
//     const ImageArr = Object.values(allDbImages).slice(0, 6)

//     const allUsers = useSelector(state => state.users)
//     const usersArr = Object.values(allUsers)
//     console.log('userARR^^^^^^^^^^:', usersArr)

//     // ------------------ test 2 -----------------
//     const followState = useSelector(state => state?.follows)
//     // console.log('follows:', followState)
//     const followsArr = (Object.values(followState))
//     console.log('!!!!!!!!!!!followsArr:', followsArr)

//     let followTestList = []
//     if (followState) {

//         // const followsArr = (Object.values(followState))
//         // console.log('!!!!!!!!!!!followsArr:', followsArr)
//         followsArr.forEach(user => {
//             if (user.username) {
//                 followTestList.push(user)
//             }
//         })
//     }

//     let resultArr = []
//     if (followsArr) {
//         for (let i = 0; i < usersArr.length; i++) {
//             if (usersArr[i].id !== userId && usersArr[i].id !== followsArr[1]?.id)
//                 resultArr.push(usersArr[i])
//         }
//         console.log("result@@@@@@@@@@@", resultArr)

//     }


//     // ---------------------------------------------

//     // ------------------- test1 fail--------------------
//     // const notfollowState = useSelector(state => state?.follows)
//     // console.log('not follows:', notfollowState)

//     // let followTestList2 = []
//     // if (notfollowState) {

//     //     const notfollowsArr = (Object.values(notfollowState))
//     //     notfollowsArr.forEach(user => {
//     //         if (user.username) {
//     //             followTestList2.push(user)
//     //         }
//     //     })
//     // }
//     // ---------------------------------------------------


//     useEffect(() => {
//         dispatch(getImagesThunk())
//         dispatch(getAllUsersThunk())
//         dispatch(getUserFollowsThunk(userId))
//         // dispatch(getNotFollowsThunk(userId))
//     }, [dispatch])

//     return (
//         <div className='mainPageContainer'>
//             <h1>My Home Page</h1>
//             <div className='recentPhoto'>
//                 <h3>Explore recent images</h3>
//                 <div className='recentImgContainer'>
//                     {ImageArr && ImageArr.map((image) => (
//                         <div>
//                             <NavLink to={`/images/${image.id}`}>
//                                 <img src={image.imageUrl} alt='image' className='singleImg'></img>
//                                 <p>{image.content}</p>
//                             </NavLink>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//             <div className='peopleToFollow'>
//                 {/* <h3>people you may want to follow</h3>
//                 <div>
//                     {resultArr.length > 0 && resultArr.map(person => (
//                         <li><NavLink to={`/users/${person.id}`}>{person.username}</NavLink></li>
//                     ))}
//                     {resultArr.length === 0 && <li>no more person to follow</li>}

//                 </div> */}

//             </div>

//         </div>
//     )
// }

// export default MainPage;
