import React from 'react'
import {Link} from 'react-router-dom'
import './BlogList.css'

const BlogList = ({item}) => {
  return (
    <Link to={item.link} className='link'>
      <div className="posts">
        <div className="post-title">
          <h3>{item.title}</h3>
        </div>
        <div className="post-date">
          {item.post_date}
        </div>
      </div>
    </Link>
  )
}

export default BlogList