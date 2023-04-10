import React from 'react'
import './Post.css'
import changeTitle from '../../changeTitle'
import { Link } from 'react-router-dom';
import Comments from '../Comments';

const Post = ({children, item}) => {
  changeTitle(item.title);

  return (
    <div className="post">
      <article>
        <h1>{item.title}</h1>
        {children}
        <div className="comments">
          <h3>Comments</h3>
          <Comments/>
        </div>
      </article>
      <div className="side">
        <div className="about-me">
          <h2>ABOUT ME</h2>
          <img src="./img/profile.jpg" alt="me" />
          <p>Hello and thanks for visiting! My name is <Link to={'/about'}><a>Faris Rafie Syahzani</a></Link>, and this is my personal website!</p>
          <p>I am a highschool student who has a great interest towards Computer, Maths, and Physics. Ultimately, this website is the spot where I share my ideas, projects, and whatever I feel like sharing.</p>
        </div>
        <div className="post-details">
          <h2>POST DETAIL</h2>
          <ul>
            <li>Published {item.post_date}</li>
          </ul>
          <h2>CATEGORY</h2>
          <ul>
            <li>{item.cat}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Post;