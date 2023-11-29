import React from 'react';
import Contact from '../../Contact/Contact';
import './ContactModal.css';

const ContactModal = ({ closeModal }) => {
    return (
      <div className="modal">
        <div className="modal-content">
        <Contact onClose={closeModal} />
        </div>
      </div>
    );
  };
  
  export default ContactModal;

