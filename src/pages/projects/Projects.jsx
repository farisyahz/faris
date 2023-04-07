import React from 'react'
import './Projects.css'
import { projects } from '../../Data'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Projects = () => {
  return (
    <div className="projects-all">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map(project => {
          return(<ProjectCard item={project}/>);
        })}
      </div>
    </div>
  )
}

export default Projects