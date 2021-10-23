/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';

import './styles.scss';

const Contact = ({handleUpClick}) => {
  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    messageError: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    scrollToComponent(window.home, {
      offset: 0,
      align: 'top',
      duration: 1000
    });
    handleUpClick();
  };

  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorsObj = {};
    if (!name) errorsObj.nameError = 'Name is required';
    if (!email) errorsObj.emailError = 'Email is required';
    if (!message) errorsObj.messageError = 'Message is required';
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email) {
      errorsObj.emailError = 'Email is invalid';
    }
    setSuccessMessage('');
    if (Object.keys(errorsObj).length) {
      setErrors(errorsObj);
    } else {
      const url = 'https://intense-cliffs-68381.herokuapp.com/send-mail';
      // const url = 'http://localhost:4000/send-mail';
      const object = {
        email,
        text: message,
        name
      };
      setLoading(true);
      axios
        .post(url, object)
        .then((res) => {
          const {success, message: resMessage} = res.data;
          if (success) {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            setSuccessMessage(resMessage);
            setLoading(false);
          }
        })
        .catch((err) => setErrors({messageError: err.message}));
    }
  };

  return (
    <div className="contact-with-footer">
      <div className="contact-page">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="white"
            stroke="white"
            data-darkreader-inline-fill=""
            data-darkreader-inline-stroke=""
          />
        </svg>
        <div className="contact-container">
          <div className="header">Contact</div>
          <div className="ask-question">Have a Question ?</div>
          <form className="contact-form" id="contact-form">
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="input-field"
              id="name"
            />
            {errors?.nameError && (
              <div className="error">{errors.nameError}</div>
            )}
            <input
              placeholder="Enter email"
              type="email"
              name="email"
              className="input-field"
              id="email"
            />
            {errors?.emailError && (
              <div className="error">{errors.emailError}</div>
            )}
            <textarea
              placeholder="Your Message"
              type="text"
              name="message"
              className="input-field text-area"
              id="message"
            />
            {errors?.messageError && (
              <div className="error">{errors.messageError}</div>
            )}
            {successMessage && <div className="success">{successMessage}</div>}
            {loading && <div>sending ...</div>}
            <input
              className="button"
              type="button"
              value="SUBMIT"
              onClick={handleSubmit}
              disabled={loading}
            />
          </form>
        </div>
      </div>
      <div className="footer">
        <i
          className="fa fa-angle-double-up up-icon"
          onClick={handleScroll}
          role="presentation"
        />
        <div className="icon-wrap flex-social-container row">
          <a
            href="https://www.linkedin.com/in/brijesh--chavda"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex-social icon" id="icon-2">
              <i className="fa fa-linkedin" />
            </div>
          </a>
          <a
            href="https://www.facebook.com/chavda.brijesh.1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex-social icon" id="icon-3">
              <i className="fa fa-facebook" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/brijesh__chavda/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex-social icon" id="icon-4">
              <i className="fa fa-instagram" />
            </div>
          </a>
          <a
            href="https://github.com/brijeshchavda25"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex-social icon" id="icon-5">
              <i className="fa fa-github" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  handleUpClick: PropTypes.func
};

export default Contact;
