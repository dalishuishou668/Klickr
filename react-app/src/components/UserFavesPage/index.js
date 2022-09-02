// import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useHistory, useParams } from 'react-router-dom';
// import react, { useEffect, useState } from 'react';
// import { getUserFavesThunk } from '../../store/favorite';
// import { getImagesThunk } from '../../store/image';



// function UserFavesPage() {


//     const dispatch = useDispatch()
//     const userId = useSelector(state => state?.session?.user?.id);

//     const allDbImages = useSelector(state => state?.images)
//     const imageArr = Object.values(allDbImages)
//     console.log('ImageArr', imageArr)

//     // let userfavesArr;
//     // let displayUserFaveImages = [];
//     let eachFaveImageArr;

//     const eachFaveImage = useSelector(state => state?.favorites?.eachFaveImage)

//     if (eachFaveImage) {
//         eachFaveImageArr = Object.values(eachFaveImage)
//         console.log('useSelector eachFaveImage`````````````', eachFaveImageArr)
//         // for (let i = 0; i < userfavesArr.length; i++){
//         //     for (let j = 0; j < imageArr.length; j++){
//         //         console.log('***********************')
//         //         if(userfavesArr[i].imageId === imageArr[j].imageId){
//         //             console.log('^^^^^^^^^^^^^^^^^^^^^^^')
//         //             displayUserFaveImages.push(imageArr[j])
//         //             console.log("------------->>>>>>>>>", displayUserFaveImages)
//         //         }
//         //     }
//         // }
//     }



//     useEffect(() => {
//         dispatch(getUserFavesThunk(userId))
//         dispatch(getImagesThunk())

//     }, [dispatch])



//     return (
//         <div>
//             <h1>Faves Page</h1>
//             <div>
//                 {eachFaveImageArr ? (<div>
//                     {eachFaveImageArr.map((image) => (
//                         <div>
//                             <NavLink to={`/images/${image?.id}`}>
//                                 <img src={image?.imageUrl} alt='image' className='singleImg'></img>
//                                 <p>{image?.content}</p>
//                             </NavLink>

//                         </div>
//                     ))}
//                 </div>) : (<div>You have no favorite pictures</div>)}
//             </div>
//         </div>
//     )

// }

// export default UserFavesPage;
