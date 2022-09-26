import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { getUserImagesThunk } from '../../store/image';
import { getUserFollowsThunk, createFollowThunk, unFollowThunk } from '../../store/follow';
import './User.css';

function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const sessionUser = useSelector(state => state.session.user);

  const sessionUserId = sessionUser.id
  console.log("sessionUser=======================:", sessionUserId, userId)

  let userImgsArr;
  const userImgs = useSelector(state => state?.images?.userImages)
  if (userImgs) {
    console.log('userId', userId)
    console.log('userImgs:==================', userImgs)
    userImgsArr = Object.values(userImgs)
  }

  const followdata = useSelector(state => state?.follows)
  console.log('followData', followdata)
  const connection = useSelector(state => state?.follows?.connection)


  let followId;
  let connectionArr;
  let isFollowExist = [];
  if (connection) {
    connectionArr = Object.values(connection)
    console.log('connectionArr', connectionArr)
    for (let i = 0; i < connectionArr.length; i++) {
      console.log('equelity---1---', connectionArr[i]?.userId === Number(userId))

      if (connectionArr[i]?.userId === Number(userId)) {
        console.log('11111111', connectionArr[i]?.userId)
        console.log('222222222', userId)
        console.log('equelity-----2---', connectionArr[i]?.userId === Number(userId))

        followId = connectionArr[i].id
        console.log('followId to send to delete:', followId)
        isFollowExist.push(connectionArr[i])
        console.log('isFollowExist------->', isFollowExist)
      }
    }
    // isFollowExist = connectionArr.filter(follow => follow?.followerId === sessionUserId)

    console.log('isFollowExist---length---->', isFollowExist.length)

  }

  // let userFollowersArr;
  // let isFollowExist;
  // if (userFollowers) {
  //   console.log('userFollowers:', userFollowers)
  //   userFollowersArr = Object.values(userFollowers)
  //   console.log('userFollowsArr:', userFollowersArr)
  //   isFollowExist = userFollowersArr.filter(follow => follow.id !== sessionUserId).length
  //   console.log('isFollowExist------->', isFollowExist)
  // }


  // let userFollowingArr;
  // let isFollowExist2 = [];
  // const userFollowing = useSelector(state => state?.follows?.following)
  // if (userFollowing) {
  //   console.log('userFollowing', userFollowing)
  //   userFollowingArr = Object.values(userFollowing)
  //   console.log('userFollowingArr:', userFollowingArr)

  //   for (let i = 0; i < userFollowingArr.length; i++){
  //     console.log('11111118888881', typeof userFollowingArr[i]?.id)
  //     console.log('22222222266666666', typeof userId)
  //         console.log('equelity---1---', userFollowingArr[i]?.id === userId)

  //         if(userFollowingArr[i]?.id === Number(userId)){
  //           console.log('inside if statement!!!!!!!!!!!!!!!')
  //           // console.log('11111111', userFollowingArr[i]?.id)
  //           // console.log('222222222', userId)
  //           console.log('equelity-----2---', userFollowingArr[i]?.id === Number(userId))

  //           isFollowExist2.push(userFollowingArr[i])
  //           console.log('isFollowExist2------->', isFollowExist2)
  //         }
  //       }

  //   // isFollowExist2 = userFollowingArr.filter(follow => follow.id !== userId)
  //   console.log('isFollowExist2------->', isFollowExist2)
  //   // console.log('isFollowExist2----length--->', isFollowExist2.length)
  // }


  // console.log('isFollowExist----666--->', isFollowExist)
  // console.log('isFollowExist2----777--->', isFollowExist2)

  // add follow
  const handleCreateFollow = async () => {
    const data = {
      userId: sessionUserId,
      followerId: userId
    }
    console.log('^^^^Payload^^^^^', data)

    await dispatch(createFollowThunk(sessionUserId, data))
    await dispatch(getUserFollowsThunk(sessionUserId))
  }



  // remove follow

  const handleUnfollow = async () => {
    const response = await dispatch(unFollowThunk(sessionUserId, followId))

    if (response) {
      await dispatch(getUserFollowsThunk(sessionUserId))
    }
  }










  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
    dispatch(getUserImagesThunk(userId))
    dispatch(getUserFollowsThunk(sessionUserId))
  }, [userId, dispatch]);

  if (!user) {
    return null;
  }




  return (
    <div className='yourPageContainer'>
      <div className='userProfileInfo5'>
        <div className='userpagepic'>
          <img className='userlogopic' src='../static/icons8-user3.png' alt='user_logo' />
        </div>
        <div className='userpageinfo'>
          <p>{user?.username}</p>
          <p>{user?.email}</p>
          {/* <div>
            {sessionUserId == userId ? '' : <div>
              {userFollowersArr && userFollowersArr.filter(follow => follow.id === sessionUserId).length > 0 ?
              <button>Unfollow</button> : <button>Follow</button>}</div>}
          </div> */}
          <div>
            {isFollowExist.length > 0 ?
              (<button onClick={handleUnfollow}>unFollow</button>) : (<button onClick={handleCreateFollow}>Follow</button>)}
          </div>
          {/* <button className='addFollowBtn'>Follow</button> */}



        </div>
      </div>
      <div className='userProfileNavbar'>
        <button className='userProfileBtn'
        >Photostream</button>
      </div>
      <div className='userimagesContainer'>
        {/* {userImgsArr ? (
          <div>
            {userImgsArr.map(image => (
              <div>
                <NavLink class="circle" to={`/images/${image.id}`}>
                  <img className='indiImg2' src={image.imageUrl} alt='image'></img>
                </NavLink>
              </div>
            ))}
          </div>
        ) : (<>No images found</>)} */}
        {userImgsArr && userImgsArr.map((image) => (
          <div>
            <NavLink class="circle" to={`/images/${image.id}`}>
              <img className='indiImg2' src={image.imageUrl} alt='image'></img>
            </NavLink>
          </div>
        ))}
      </div>
    </div>

  );
}
export default User;
