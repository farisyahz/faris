import React from 'react'
import './About.css'
import changeTitle from '../../changeTitle'

const About = () => {
  changeTitle('About me | Faris Syahzani')
  return (
    <div className="about">
      <article>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates eius nobis sapiente a omnis repellendus ut repudiandae. Sit error animi molestiae assumenda nihil voluptatibus laboriosam sapiente eum! Magnam, ratione?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sapiente ab. Ipsum, illo? Aliquid rem officia deleniti quos omnis quas libero fugit soluta, sint asperiores. Delectus distinctio doloremque accusamus obcaecati!</p>

        <h2>Currently</h2>
        <ul>
          <li>Highschool Student at SMAN 1 Kota Bekasi</li>
          <li>BIM 3 Preparation Awardee</li>
          <li>CEO and Founder of Faqbox.co</li>
          <li>Working on many projects</li>
        </ul>

        <h2>Random Facts</h2>
        <ul>
          <li>Highschool Student at <a href=''>SMAN 1 Kota Bekasi</a></li>
          <li><a href=''>BIM 3 Preparation</a> Awardee</li>
          <li>CEO and Founder of <a href=''>Faqbox.co</a></li>
          <li>Working on many <a href={'/projects'}>projects</a></li>
        </ul>

        <h2>Favorites</h2>
        <ul>
          <li><b>Color</b> - Blue</li>
          <li><b>Subject</b> - Maths, Physics, Computer</li>
          <li><b>Text Editor</b> - VSCode</li>
        </ul>
      </article>
      <div className="side">
        <div className="me">
          <h2>Me</h2>
          <img src="./img/me.jpg" alt="me" />
        </div>
        <div className="nationality">
          <h2>Bekasi, Indonesia</h2>
          <img src="./img/indonesia.png" alt="indonesia" />
        </div>
      </div>
    </div>
  )
}

export default About