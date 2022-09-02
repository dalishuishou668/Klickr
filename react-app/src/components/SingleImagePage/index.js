import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { getAllUsersThunk } from '../../store/user';
import { getSingleImageThunk, deleteImageThunk, editImageThunk } from '../../store/image';
import { getImageCommentsThunk, addCommentThunk, editCommentThunk, deleteCommentThunk } from '../../store/comment';
import { getImageFavesThunk, getUserFavesThunk, addUserFaveThunk, deleteFaveThunk } from '../../store/favorite';
import Fave from './Fave';
import './SingleImagePage.css';

function SingleImagePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { imageId } = useParams();

    const image = useSelector(state => state?.images[imageId]);
    const userId = useSelector(state => state?.session?.user?.id);

    const allUsers = useSelector(state => state.users)
    const usersArr = Object.values(allUsers)
    // console.log('userARR^^^^^^^^^^:', usersArr)



    // ------------- FAVE -----------------
    // let favesArr;
    // let currentfaves;
    // let currentFaveId;

    // const faves = useSelector(state => state?.favorites?.imagefaves)
    // console.log('useSelector imagefaves=========>>>', faves)

    // if (faves) {
    //     favesArr = Object.values(faves)
    //     console.log('all images favesArr==========>>>>>>>>>', favesArr)
    //     currentfaves = favesArr.find((ele) => ele?.imageId === +imageId && ele?.userId === +userId)
    //     currentFaveId = currentfaves?.id
    //     console.log('++++++++++++++++currentfaves:', currentfaves)

    // }

    // console.log('current fave id:-----------', currentFaveId)

    // const userfaves = useSelector(state => state?.favorites?.userfaves)
    // // const userfaves = useSelector(state => state?.favorites)
    // // console.log('useSelector userfaves`````````````', userfaves)

    // let displayUserFaves;
    // // let displayCheckCurrentUserFaves;


    // if (userfaves) {
    //     const userfavesArr = Object.values(userfaves)
    //     // console.log('userfavesArr in the component:', userfavesArr)
    //     // displayCheckCurrentUserFaves =  userfavesArr.find((ele) => ele?.imageId === +imageId && ele?.userId === +userId )
    //     displayUserFaves = userfavesArr.filter((ele) => ele.imageId === +imageId)
    //     // currentFaveId = displayUserFaves[0]?.id
    //     // console.log('current fave id:-----------', currentFaveId)
    //     // console.log('++++++++++++++displayUserFaves+++++++++++++++++', displayUserFaves)

    // }

    // fave solution2 ---------------------




    // ------------------------------------



    useEffect(() => {
        dispatch(getSingleImageThunk(imageId))
        dispatch(getImageCommentsThunk(imageId))
        dispatch(getAllUsersThunk())
        // dispatch(getImageFavesThunk(imageId)).then(() =>
        //     dispatch(getUserFavesThunk(userId, imageId))
        // )

        // dispatch(getUserFavesThunk(userId, imageId)).then(() =>
        //     dispatch(getImageFavesThunk(imageId))
        // )

    }, [dispatch, imageId])

    // ----------------------- comments ---------------------------

    const comments = useSelector(state => state?.comments)
    const commentsArr = Object.values(comments)


    // delete image
    const handleDeleteImage = async (e) => {
        e.preventDefault()

        await dispatch(deleteImageThunk(imageId))
        history.push('/your-images')
    }

    // edit image

    const [showEditForm, setShowEditForm] = useState(false)
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    let regex1 = /[a-zA-Z0-9]/

    useEffect(() => {
        const errors = [];
        if (content.length < 2 || !(regex1.test(content))) errors.push('Content must be ad least 2 characters');
        if (description.length < 2 || !(regex1.test(description))) errors.push('Description must be ad least 2 characters');
        setErrors(errors);
    }, [content, description])

    const handleEditImage = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            description
        };

        await dispatch(editImageThunk(payload, imageId))
        // history.push('/your-images')
        setContent('')
        setDescription('')
    }

    // add comment
    const [comment, setComment] = useState('')
    const [errors1, setErrors1] = useState([]);

    useEffect(() => {
        const errors1 = [];
        if (comment.length < 2 || !(regex1.test(comment))) errors1.push('Comment must be ad least 2 characters');

        setErrors1(errors1);
    }, [comment])

    const handleAddComment = async (e) => {
        e.preventDefault()

        const payload = {
            userId,
            imageId,
            comment
        }

        await dispatch(addCommentThunk(imageId, payload))
        setComment('')

    }

    // Edit comment
    const [showEditComment, setShowEditComment] = useState(false)
    const [selectCommentId, setSelectCommentId] = useState('')
    const [selectComment, setSelectComment] = useState('')
    const [selectUserId, setSelectUserId] = useState('')
    const [showComment, setShowComment] = useState(true)
    // const [showEditBtn, setShowEditBtn] = useState(false)
    const [comment1, setComment1] = useState('')
    const [errors2, setErrors2] = useState([])

    useEffect(() => {
        const errors2 = [];
        if (comment1.length < 1 || !(regex1.test(comment1))) errors2.push('Comment must be ad least 2 characters');
        setErrors2(errors2);
    }, [comment1])

    const handleEditComment = async (e) => {
        e.preventDefault()

        const payload1 = {
            userId,
            imageId,
            comment: comment1
        }

        await dispatch(editCommentThunk(payload1, imageId, selectCommentId))
        setComment1('')
        setShowEditComment(false)
        setSelectCommentId('')
    }



    const getUsername = (userId) => {
        if (usersArr) {
            let result = usersArr.filter(user => user?.id === userId);
            return result[0]?.username
        }
    }

    // Delete comment

    const handleDeleteComment = async (e, commentId) => {
        e.preventDefault()
        setSelectCommentId()
        await dispatch(deleteCommentThunk(imageId, commentId))

    }

    // add user fave

    // const [showSolidHeart, setShowSolidHeart] = useState(false)

    // const addUserFaveSubmit = async (e) => {
    //     e.preventDefault()
    //     const payload = {
    //         userId,
    //         imageId
    //     }
    //     await dispatch(addUserFaveThunk(payload, imageId))
    //     // await dispatch(getUserFavesThunk(imageId, userId))
    //     await dispatch(getImageFavesThunk(imageId))

    //     // setShowSolidHeart(true)
    //     history.push(`/images/${imageId}`)


    // }

    // // delete user fave




    // const deleteUserFaveSubmit = async (e) => {
    //     e.preventDefault()

    //     // await dispatch(getImageFavesThunk(imageId))
    //     await dispatch(deleteFaveThunk(imageId, currentFaveId))
    //     await dispatch(getUserFavesThunk(userId))
    //     await dispatch(getImageFavesThunk(imageId))

    // }


    return (
        <div>
            <h1>single image page</h1>
            <div className='imgDisplayContainer'>
                {/* <div className='imgInfoContainer'> */}
                <div className='imgInfoContainer1'>
                    <div className='imgContent1'>
                        <h2 id='heading'>{image?.content}</h2>
                    </div>
                    <div className='imgInfoContainer2'>
                        <img src={image?.imageUrl} alt={image?.title} className='image1'></img>
                    </div>
                    <div className='userBtnContainer'>
                        {image?.userId === userId ? (
                            <div className='imgBtnContainer'>
                                <div className='editImgSymbol' onClick={() => setShowEditForm(true)}><i class="fa-solid fa-pen-to-square"></i></div>
                                <div className='deleteImgSymbol' onClick={handleDeleteImage}><i class="fa-solid fa-trash-can"></i></div>
                            </div>
                        ) : ('')}
                    </div>
                </div>


                <div className='imgInfoContainer'>
                    <div className='singleImgRight'>
                        {/* <div className='favesContainer'>
                            <div className='totalFave'>
                                {favesArr && (<p>total faves: {favesArr?.length}</p>)}
                            </div>
                            <div className='faveSymbol'>

                                {displayUserFaves && displayUserFaves.length < 1 ? (<div>
                                    <div onClick={addUserFaveSubmit}><i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>) : (<div>
                                    <div onClick={deleteUserFaveSubmit}><i class="fa-solid fa-heart"></i></div>

                                </div>)}
                            </div>
                        </div> */}


                        <div className='editImgContainer'>
                            {showEditForm ? (<div>
                                <form onSubmit={handleEditImage}>
                                    <div>
                                        <ul className="errors">
                                            {errors.map(error => (
                                                <li className='err' key={error}>* {error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <input
                                        placeholder='edit content'
                                        type="text"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    ></input>
                                    <input
                                        placeholder='edit description'
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></input>
                                    <button type="submit" disabled={!!errors.length}>Edit</button>
                                </form>
                            </div>) : (
                                <div></div>
                            )}

                        </div>
                    </div>
                    <div className='commentinfo2'>
                        <div className='userPic1'>
                            <img id='headPic' src='../../../../static/user.png' alt='user_logo1' />
                        </div>
                        <div className='userPic1-2'>
                            <h3>{getUsername(image?.userId)}</h3>
                            <p>{image?.description}</p>
                        </div>
                    </div>

                    <div className='addCommentsContainer'>
                        <div className='userPic2'>
                            <img id='headPic2' src='../../../static/phone.png' alt='user_logo1' />
                        </div>
                        <div className='addCommentForm1'>
                            <form className='addCommentForm2' onSubmit={handleAddComment}>
                                <div>
                                    <ul>
                                        {errors1.map(error1 => (
                                            <li className='err' key={error1}>* {error1}</li>
                                        ))}
                                    </ul>
                                </div>
                                <textarea
                                    className='addCommentInput'
                                    placeholder='add comments'
                                    type="text"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button className='addCommentBtn' type="submit" disabled={!!errors1.length}>Save</button>
                            </form>

                        </div>

                    </div>

                    <div className='imgCommentsContainer'>
                        <div className='displayCommentsContainer1'>
                            {commentsArr && commentsArr.map(ele =>
                            (
                                <div className='displayCommentsContainer2'>
                                    <div className='allCommentContainer'>
                                        <div className='commentCardLeft'>
                                            <img id='headPic3' src='../static/phone.png' alt='user_logo1' />
                                        </div>
                                        <div className='commentCardRight'>
                                            <h4 className='commentUsername'>{ele?.user?.username}</h4>
                                            <div className='display-comment1'>
                                                <div className='single-comment'>
                                                    <div className='single-comment-ele'>
                                                        {
                                                            selectCommentId !== ele.id && (
                                                                <p>{ele?.comment} </p>
                                                            )
                                                        }
                                                        {/* <p>{ele?.comment}</p> */}


                                                    </div>

                                                    <div className='comment-select-button'>
                                                        {ele?.user?.id === userId ? (
                                                            <div className='editCommentSymbolContainer'>
                                                                <div className='editCommentSymbol'
                                                                    onClick={() => {
                                                                        setShowEditComment(true)
                                                                        setSelectCommentId(ele?.id)
                                                                        setComment1(ele?.comment)
                                                                        // setShowComment(false)
                                                                    }}>
                                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                                </div>
                                                                <div className='deleteCommentSymbol'
                                                                    onClick={(e) => handleDeleteComment(e, ele?.id)}
                                                                >
                                                                    <i class="fa-solid fa-trash-can"></i>
                                                                </div>
                                                            </div>
                                                        ) : ''}
                                                    </div>

                                                </div>
                                                <div className='comment-2'>
                                                    {ele.id === selectCommentId && showEditComment ? (<div>
                                                        <form onSubmit={handleEditComment}>
                                                            <div>
                                                                <ul className="errors">
                                                                    {errors2.map(error => (
                                                                        <li className='err' key={error}>* {error}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <input
                                                                placeholder={selectComment}
                                                                type="text"
                                                                value={comment1}
                                                                onChange={(e) => setComment1(e.target.value)}
                                                            ></input>
                                                            <button type="submit" disabled={!!errors2.length}>Submit</button>

                                                        </form>
                                                    </div>) : (<>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>


            </div>






        </div>
    )
}

export default SingleImagePage;
