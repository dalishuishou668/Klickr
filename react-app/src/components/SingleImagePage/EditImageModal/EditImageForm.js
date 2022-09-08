import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { editImageThunk } from '../../../store/image';


function EditImageForm({ imageId, setShowModal }) {

    console.log('**********imageId prop:', imageId)

    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);



    let regex1 = /[a-zA-Z0-9]/

    useEffect(() => {
        const errors = [];
        if (content.length < 2 || !(regex1.test(content)) || content.length > 60) errors.push('Content: content must be ad least 2 characters and less than 60 characters');
        if (description.length < 2 || !(regex1.test(description)) || description.length > 500) errors.push('Description: description must be at least 2 characters and less than 500 characters');
        setErrors(errors);
    }, [content, description])

    const handleEditImage = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            description
        };

        await dispatch(editImageThunk(payload, imageId))
        setContent('')
        setDescription('')
        setShowModal(false)
    }



    return (
        <div className='editImgContainer'>
            <form className='editImgForm' onSubmit={handleEditImage}>
                <div>
                    <ul className="errors">
                        {errors.map(error => (
                            <li className='err' key={error}>* {error}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label className='contentlabel'>Content</label>
                    <input
                        className='editimgcontent'
                        placeholder='Update content here'
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></input>
                </div>
                <div className='editimgdescription2'>
                    <label className='descriptionlabel'>Description</label>
                    <textarea
                        className='editimgDescription'
                        placeholder='Update description here'
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className='editImgBtnContainer'>
                    <button className='editImgBtn3' type="submit" disabled={!!errors.length}>Confirm</button>
                    {/* <button className='editImgBtn3' onClick={() => setShowEditForm(false)}>Back</button> */}
                </div>
            </form>
        </div>
    )
}


export default EditImageForm;
