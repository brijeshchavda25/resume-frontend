/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import scrollToComponent from 'react-scroll-to-component';

import profileImage from './profile.jpg';
import './styles.scss';

export default function About() {
  const handleScroll = () => {
    scrollToComponent(window.contact, {
      offset: 0,
      align: 'top',
      duration: 1000
    });
  };

  return (
    <div className="about-container">
      <div className="header">About</div>
      <div className="container profile-container">
        <div className="row align-center">
          <div className="col-lg-6 col-12 about-col" align="center">
            <img className="profile-image" src={profileImage} alt="Avatar" />
            <div className="label bold">Who's this guy?</div>
            <div>
              I'm a Senior Cloud Application Developer in Pune, Maharashtra.
              <br />
              I have serious passion for building complete web application
              <br />
              and creating intuitive, dynamic user experiences.
              <br />
              <span className="link" onClick={handleScroll} role="presentation">
                Let's make something special.
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-12" align="center">
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '70%'}}
                >
                  React Js
                </div>
                <div className="percentage">
                  <span className="percentage-text">70%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '70%'}}
                >
                  Redux Js
                </div>
                <div className="percentage">
                  <span className="percentage-text">70%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '70%'}}
                >
                  JavaScript
                </div>
                <div className="percentage">
                  <span className="percentage-text">70%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '70%'}}
                >
                  Node Js
                </div>
                <div className="percentage">
                  <span className="percentage-text">70%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '70%'}}
                >
                  MongoDB
                </div>
                <div className="percentage">
                  <span className="percentage-text">70%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '60%'}}
                >
                  Java
                </div>
                <div className="percentage">
                  <span className="percentage-text">60%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '60%'}}
                >
                  Data Structure
                </div>
                <div className="percentage">
                  <span className="percentage-text">60%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '60%'}}
                >
                  PostgreSQL
                </div>
                <div className="percentage">
                  <span className="percentage-text">60%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '60%'}}
                >
                  HTML
                </div>
                <div className="percentage">
                  <span className="percentage-text">60%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '60%'}}
                >
                  CSS
                </div>
                <div className="percentage">
                  <span className="percentage-text">60%</span>
                </div>
              </div>
            </div>
            <div className="bar-container">
              <div className="progress bar-size">
                <div
                  className="progress-bar bar-color"
                  style={{minWidth: '60%'}}
                >
                  GIT
                </div>
                <div className="percentage">
                  <span className="percentage-text">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
