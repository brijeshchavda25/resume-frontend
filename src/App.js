import {useState, useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import scrollToComponent from 'react-scroll-to-component';
import $ from 'jquery';
import debounce from 'lodash/debounce';

import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.scss';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const sections = $('section');
    const nav = $('nav');
    const navHeight = nav.outerHeight();

    $(window).on(
      'scroll',
      debounce(function scrollHandle() {
        const curPos = $(this).scrollTop();

        sections.each(function checkSection() {
          const top = $(this).offset().top - navHeight;
          const bottom = top + $(this).outerHeight() - 30;

          if (curPos >= top && curPos <= bottom) {
            nav.find('li').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find(`li[href="#${$(this).attr('id')}"]`).addClass('active');
          }
        });
      }, 50)
    );
  }, []);

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleScroll = (scrollComponent) => {
    let component = null;
    switch (scrollComponent) {
      case 'home':
        component = window.home;
        break;
      case 'about':
        component = window.about;
        break;
      case 'education':
        component = window.education;
        break;
      case 'experience':
        component = window.experience;
        break;
      case 'contact':
        component = window.contact;
        break;
      default:
        break;
    }
    scrollToComponent(component, {
      offset: 0,
      align: 'top',
      duration: 1000
    });
    if (!isCollapsed) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className="sections">
      <section
        className="bg-img overflow-wrap"
        ref={(section) => {
          window.home = section;
        }}
        id="1"
      >
        <nav className="navbar navbar-expand-md navbar-light navbar-position fixed-top">
          <button
            className="navbar-toggler nav-button"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            onClick={handleCollapsed}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`${
              isCollapsed ? 'collapse' : ''
            } navbar-collapse item-list`}
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav mr-auto nav-bar-items">
              <li className="nav-item active" href="#1">
                <a
                  className="nav-link nav-link-color"
                  onClick={() => handleScroll('home')}
                  href={() => false}
                >
                  Home
                </a>
              </li>
              <li className="nav-item" href="#2">
                <a
                  className="nav-link nav-link-color"
                  onClick={() => handleScroll('about')}
                  href={() => false}
                >
                  About
                </a>
              </li>
              <li className="nav-item" href="#3">
                <a
                  className="nav-link nav-link-color"
                  onClick={() => handleScroll('education')}
                  href={() => false}
                >
                  Education
                </a>
              </li>
              <li className="nav-item" href="#4">
                <a
                  className="nav-link nav-link-color"
                  onClick={() => handleScroll('experience')}
                  href={() => false}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item" href="#5">
                <a
                  className="nav-link nav-link-color"
                  onClick={() => handleScroll('contact')}
                  href={() => false}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="middle-content flex">
          <div className="text">
            Hello, I'm
            <span className="highlight"> Brijesh Chavda</span>
            .
            <br />
            I'm a Senior Application Developer.
          </div>
          <div
            className="button"
            onClick={() => handleScroll('about')}
            role="presentation"
          >
            <span className="arrow-position">View my work</span>
            <i className="fa fa-arrow-right" />
          </div>
        </div>
      </section>
      <section
        ref={(section) => {
          window.about = section;
        }}
        id="2"
      >
        <About />
      </section>
      <section
        ref={(section) => {
          window.education = section;
        }}
        id="3"
      >
        <Education />
      </section>
      <section
        ref={(section) => {
          window.experience = section;
        }}
        id="4"
      >
        <Experience />
      </section>
      <section
        ref={(section) => {
          window.contact = section;
        }}
        id="5"
      >
        <Contact handleUpClick={handleCollapsed} />
      </section>
    </div>
  );
}

export default App;
