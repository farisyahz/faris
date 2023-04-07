import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import changeTitle from '../../changeTitle'
import { blogs, projects } from '../../Data'
import BlogList from '../../components/blogList/BlogList'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  changeTitle("Faris Syahzani");
  const last5blog = blogs[2023].slice(-5);
  const last3project = projects.slice(-3);
  last3project.reverse()
  last5blog.reverse()
  return (
    <div className='home'>
      <div className="section-about">
        <div className="intro">
          <h1>Hi, I'm Faris!</h1>
          <p>Welcome to my website.🦊</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non rem ea exercitationem deserunt magnam cumque officiis pariatur quasi, veniam, illo sint.</p>
        </div>
        <img src="./img/laptop.png" alt="" />
      </div>
      <div className="section-blog">
        <div className="posts-header">
          <h2>Latest Posts</h2>
          <Link to='/blog' className='link'>
            <button className="view-all-button">View All</button>
          </Link>
        </div>
        <div className="latest-posts">
          {last5blog.map(blog => {
            return(
              <BlogList item={blog}/>
            )
          })}
        </div>
      </div>
      <div className="section-projects">
        <div className="projects-header">
          <h2>Projects</h2>
          <Link to='/projects' className='link'>
            <button className="view-all-button">View All</button>
          </Link>
        </div>
        <div className="projects">
          {last3project.map(project => {
            return(
              <ProjectCard item={project}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home