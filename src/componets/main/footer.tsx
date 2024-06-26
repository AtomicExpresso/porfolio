import React from 'react';
import Twitter from '../../assets/images/icons/twitter.svg';
import Youtube from '../../assets/images/icons/youtube.svg';
import Instagram from '../../assets/images/icons/instagram.svg';
import Discord from '../../assets/images/icons/discord.svg';

function Footer(){
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-col-2">
          <h2>Atomic</h2>
          <p>a dedicated front-end developer with a drive for turning innovative ideas into reality</p>
        </div>
        <div className="footer-col-2">
          <h2>Socials</h2>
          <div className="footer-social-links">
           <a href='https://twitter.com/pumped212'><img src={Twitter} alt='Twitter' draggable='false'></img></a>
           <a href='#'><img src={Youtube} alt='Youtube' draggable='false'></img></a>
           <a href='#'><img src={Instagram} alt='Instagram' draggable='false'></img></a>
           <a href='#'><img src={Discord} alt='Discord' draggable='false'></img></a>
          </div>
        </div>
        </div>
        <hr></hr>
        <div className="footer-row-2">
          <p>© Copyright 2024 | Made by <span><a href='https://github.com/AtomicExpresso'>Atomic</a></span></p>
        </div>
    </div>
  )
}

export default Footer