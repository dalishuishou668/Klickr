
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditImageForm from './EditImageForm';
// import './Upload.css';


function EditImageModal({imageId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className='editImgSymbol' onClick={() => setShowModal(true)}><i class="fa-solid fa-pen-to-square"></i></div>

      {showModal &&
        (<Modal onClose={() => setShowModal(false)}>
          <EditImageForm closeModal={() => setShowModal(false)} imageId={imageId} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
  );
}

export default EditImageModal;
