import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
  return (
    <div className='project-card'>
      <div>
        <p className="year">{item.year}</p>
        <a href={item.source} target='_blank'><h3>{item.title}</h3></a>
        <p className="desc">{item.desc}</p>
      </div>
      <div className="attr">
        {item.article && <a href={item.article}>
          <button>Article</button>
        </a>}
        {item.demo && <a href={item.demo} target='_blank'>
          <button>Demo</button>
        </a>}
        <a href={item.source} target='_blank'>
          <button className='source'>Source<i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard