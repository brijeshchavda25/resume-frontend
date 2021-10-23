import React from 'react';
import './styles.scss';

export default function Education() {
  return (
    <div className="education-container">
      <div className="header">Education</div>
      <div className="card-container">
        <div className="card card-size">
          <div className="card-body text">
            <div className="card-title card-header">
              Master of Computer Application (M.C.A)
            </div>
            <p className="card-text secondary-text">
              Rollwala Computer Centre, Ahmedabad (May - 2018)
            </p>
            <p className="card-text secondary-text">Completed M.C.A with 74%</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card card-size">
          <div className="card-body text">
            <div className="card-title card-header">
              Bachelor of Computer Application (B.C.A)
            </div>
            <p className="card-text secondary-text">
              Veer Narmad South Gujarat University (Mar - 2015)
            </p>
            <p className="card-text secondary-text">Completed B.C.A with 66%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
