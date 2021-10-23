import React from 'react';
import './styles.scss';

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="header">Experience</div>
      <div className="card-container">
        <div className="card card-size">
          <div className="card-body text">
            <div className="card-title card-header">Amnex Infotechnologies</div>
            <p className="card-text secondary-text">
              Software Developer (Jan 2018 - Jun 2018)
            </p>
            <p className="card-text secondary-text">
              Used technologies like ASP.Net, MVC, SQL Server, PostgreSQL
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card card-size">
          <div className="card-body text">
            <div className="card-title card-header">
              Greycell Software Private Limited
            </div>
            <p className="card-text secondary-text">
              Full Stack Developer (Jul 2018 - Jul 2019)
            </p>
            <p className="card-text secondary-text">
              Used technologies like React Js, Redux, Java Spring Boot, MongoDB
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card card-size">
          <div className="card-body text">
            <div className="card-title card-header">DOT Infotech</div>
            <p className="card-text secondary-text">
              Full Stack Developer (Aug 2019 - Apr 2021)
            </p>
            <p className="card-text secondary-text">
              Used technologies like React Js, Redux, Node Js, MongoDB,
              PostgreSQL
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card card-size">
          <div className="card-body text">
            <div className="card-title card-header">Blazeclan Technologies</div>
            <p className="card-text secondary-text">
              Senior Cloud Application Developer (Apr 2021 - Present)
            </p>
            <p className="card-text secondary-text">
              Used technologies like React Js, Context API, Node Js, PostgreSQL,
              AWS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
