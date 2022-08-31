// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getUserFollowsThunk } from '../../store/follow';

// function UserFollowsPage() {

//     const dispatch = useDispatch()
//     const userId = useSelector(state => state?.session?.user?.id);
//     console.log('userId:', userId)

//     const followState = useSelector(state => state?.follows)
//     console.log('follows:', followState)

//     let followTestList = []
//     if (followState) {

//         const followsArr = (Object.values(followState))
//         console.log('!!!!!!!!!!!followsArr:', followsArr)
//         followsArr.forEach(user => {
//             if (user.username) {
//                 followTestList.push(user)
//             }
//         })
//     }

//     console.log('!!!!!!!!!!!followstestList:', followTestList)

//     useEffect(() => {
//         dispatch(getUserFollowsThunk(userId))
//     }, [dispatch])



//     return (
//         <div>
//             <h1>Follows Page</h1>
//             <div>
//                 <ul className="friends-ul">
//                     {followTestList.length > 0 && followTestList.map(followingPerson => (
//                         <li key={followingPerson.id}>
//                             <NavLink to={`/users/${followingPerson.id}`}>
//                                 <p>{followingPerson.username}</p>
//                                 {/* <img src={followingPerson?.profile_pic} alt='image' className='singleImg'></img> */}
//                             </NavLink>

//                         </li>
//                     ))}
//                     {followTestList.length === 0 && <li>Sorry, you have no followings.</li>}

//                 </ul>
//             </div>
//         </div>
//     )

// }

// export default UserFollowsPage;
