import React from 'react'
import './About.css'
import changeTitle from '../../changeTitle'
import { Link } from 'react-router-dom'

const About = () => {
  changeTitle('About me | Faris Syahzani')
  return (
    <div className="about">
      <article>
        <h1>About Me</h1>
        <p>Hi! I'm Faris Rafie Syahzani, and I'm a student at <a href='http://www.sman1bekasi.sch.id/' target='_blank'>SMAN 1 Kota Bekasi</a>, West Java, Indonesia. I have always been fascinated with Science and Technology especially at Computer, Maths, and Physics. I love creating stuff, and this website is one of my creation. I created this website so I can share my knowledges, ideas, creations, projects, or basically whatever I feel like sharing.</p>
        <p>I hope you can get something useful by visiting my site. I also hope this can inspire people to always be productive and be useful to others by doing something that they love. </p>
        <p>I really appreciate meeting new people. You can contact me by <a href='mailto:farisyahzani6@gmail.com'>email</a> or follow me on social media :</p>
        <ul>
          <li><a href="https://www.instagram.com/farisyahzani/" target='_blank'>Instagram</a></li>
          <li><a href="https://www.youtube.com/channel/UC9G2DW5fUCyVje-57kVxHJw" target='_blank'>Youtube</a></li>
          <li><a href="https://github.com/farisyahz" target='_blank'>Github</a></li>
        </ul>

        <h2>Currently</h2>
        <p><i>Updated April 9th, 2023</i></p>
        <ul>
          <li>Highschool Student at SMAN 1 Kota Bekasi</li>
          <li>BIM <a href='https://bim-pusatprestasinasional.kemdikbud.go.id//' target='_blank'>(Beasiswa Indonesia Maju)</a> 3 Preparation Awardee</li>
          <li>Working on many <Link to={'/projects'}>projects</Link></li>
          <li>Interested in learning AI and Machine Learning 🧑‍💻🤖</li>
        </ul>

        <h2>Random Facts</h2>
        <ul>
          <li>I'm teaching myself web development💻</li>
          <li>I was born on 6th January 2007</li>
          <li>Elon Musk is someone that I looked up to growing up 🚀⚡🤖</li>
          <li>I won bronze medal in physics at Indonesian National Science Olympiad (OSN) 2022</li>
          <li>Unlike typical person who likes computer and stuff, I'm not really into video games 🎮❌</li>
        </ul>

        <h2>Favorites</h2>
        <ul>
          <li><b>Color</b> - Blue</li>
          <li><b>Subject</b> - Maths, Physics, Computer</li>
          <li><b>Food</b> - Indonesian Rendang</li>
          <li><b>Animal</b> - Fox</li>
          <li><b>Text Editor</b> - VSCode</li>
        </ul>

        <h2>About this website</h2>
        <p>This website is hosted on <a href='https://www.netlify.com/' target='_blank'>Netlify</a> and uses <a href='https://www.react.dev/' target='_blank'>React</a> framework.</p>
        <p>This website is actually the "recreated" version of my personal website. Visit <a href='https://farisyahz.github.io/blog' target='_blank'>farisyahz.github.io/blog</a> if you want to see the previous one. </p>
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