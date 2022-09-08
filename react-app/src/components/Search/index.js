// import React from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getImagesThunk } from '../../store/image';
// import img from '../../pictures/watching-eyes.gif';
// import './Search.css'

// function Search() {
//     // SERACH IMAGE
//     let history = useHistory();
//     const dispatch = useDispatch();
//     const allDbImages = useSelector(state => state?.images)
//     const ImagesArr = Object.values(allDbImages)

//     const [resultImages, setResultImages] = useState([])
//     const [searchKeyword, setSearchkeyword] = useState('')


//     useEffect(() => {
//         dispatch(getImagesThunk())
//     }, [dispatch])


//     const handleUserSearch = (e) => {
//         const inputs = e.target.value;
//         setSearchkeyword(inputs)

//         console.log('=============================', searchKeyword)
//         const filteredImages = ImagesArr?.filter((image) => {
//             const content = image.content.toLowerCase().includes(inputs.toLowerCase());
//             return content
//         })
//         console.log('==============111111===============', filteredImages)
//         if (inputs === '') {
//             setResultImages([])
//         } else {
//             setResultImages(filteredImages)
//         }
//         console.log('=============2222222================', resultImages)

//     }

//     return (
//         <div className='searchDiv'>
//             <div className='search-bar'>
//                 <div className='searchUpper'>
//                     <img className="searchImg" src={img} alt="loading..." />
//                     <h1 className='searchText'>Searching ...</h1>

//                 </div>

//                 <div className='testSearchDiv'>
//                     <div className='searchUserinput'>
//                         <input
//                             className="searchword"
//                             placeholder="Search By Image Content (e.g. island)"
//                             value={searchKeyword}
//                             onChange={handleUserSearch}
//                         />
//                     </div>
//                     <div className='searchUserinput1'>
//                         {ImagesArr && resultImages.length !== 0 && (
//                             <div className='searchresultContainer'>
//                                 {resultImages.map((image) => (
//                                     <div>
//                                         <NavLink

//                                             className="searchResult"
//                                             to={`/images/${image.id}`}
//                                         >
//                                             {image.content}
//                                         </NavLink>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}

//                     </div>

//                 </div>

//             </div>

//         </div>



//     )
// }

// export default Search;
