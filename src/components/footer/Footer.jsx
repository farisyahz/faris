import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>Made by Faris Syahzani</p>
      <div className="powered">
        <a href="https://react.dev/" target='_blank'>
          <div className="react">
            <p>React</p>
            <img src="./img/react.png" alt="react"/>
          </div>
        </a>
        <a href="https://github.com" target='_blank'>
          <div className="github">
            <p>GitHub</p>
            <i class="fa-brands fa-github-alt fa-xl"></i>
          </div>
        </a>
        <a href="https://www.netlify.com/" target='_blank'>
          <div className="netlify">
            <p>Netlify</p>
            <img src="./img/netlify.png" alt="react"/>
          </div>
        </a>
        
      </div>
    </div>
  )
}

export default Footer