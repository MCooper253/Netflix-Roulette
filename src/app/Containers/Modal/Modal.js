import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react/dist/focus-trap-react';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer.js';

import Button from '../../Components/Button.js';
import Close from '../../Images/close.png';
import Logo from '../../Components/Logo.js';

import I18N from '../../../core/I18N.js';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div id="modal-container">
      <Logo />
      <FocusTrap>
        <aside className="modal">
          <Button onClick={props.closeModal} image={Close} />
          <h1>{props.title}</h1>
          {props.innerComp}
        </aside>
      </FocusTrap>
      <Footer />
    </div>,
    document.body
  );
};

Modal.defaultProps = {
  innerComp: <p>{I18N[process.env.LANG].DELETE_MESS}</p>,
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  innerComp: PropTypes.object,
  title: PropTypes.string,
};

export default Modal;
