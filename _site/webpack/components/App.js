import React from 'react';
import img from '../assets/images/profile-square.jpg';

const App = () => {
  return (
    <section className="container">
      <div className="item">
        <div className="nav-item">About</div>
        <div className="nav-item">Tools</div>
        <div className="nav-item">Posts</div>
        <div className="nav-item">Contact</div>
      </div>
      <div className="item content">
        <img
          className="profile-image"
          style={{ margin: '0.5em' }}
          height="300"
          width="300"
          src={img}
          alt="React Logo"
        />
        <h1 className="heading">Juan Pareles</h1>
        <small className="sub-heading">Full-Stack Developer</small>
      </div>
      <div className="item footer">
        Footer
      </div>
    </section>
  );
};

export default App;
