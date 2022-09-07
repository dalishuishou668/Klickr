import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateAlbumForm from './CreateAlbumForm';
// import './Upload.css';


function CreateAlbumModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button className='createAlbumBtn' onClick={() => setShowModal(true)}>+ New album</button>

      {showModal &&
        (<Modal onClose={() => setShowModal(false)}>
          <CreateAlbumForm closeModal={() => setShowModal(false)} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
  );
}

export default CreateAlbumModal;
