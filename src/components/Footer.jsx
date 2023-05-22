import React from 'react'
import Logo from './images/logo-footer.svg'
import face from './images/icon-facebook.svg'
import insta from './images/icon-instagram.svg'
import twit from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg' 

function Footer() {
  return (
    <footer>
      <img src={Logo} className="footerImg" alt="Logo image" />
      <section className='footerNav' >
        <h2>Features</h2>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </section>
      <section className='footerNav' >
        <h2>Resources</h2>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </section>
      <section className='footerNav' >
        <h2>Company</h2>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </section>
      <section className='social-icons'>
        <img src={face} alt="facebook icon" />
        <img src={twit} alt="twitter icon" />
        <img src={pinterest} alt="pinterest icon" />
        <img src={insta} alt="instagram icon" />
      </section>
    </footer>
  )
}


export default Footer