import React from 'react'
import './Blog.css'
import { blogs } from '../../Data'
import BlogList from '../../components/blogList/BlogList'
import changeTitle from '../../changeTitle'

const Blog = () => {
  changeTitle("Blog | Faris Syahzani")
  return (
    <div className="blog">
      <h1>Writing</h1>
      <div className="year 2023">
        <h2>2023</h2>
        {blogs.map(blog => {
          if(blog.year === 2023) return(<BlogList item={blog}/>);
        })}
      </div>
    </div>
  )
}

export default Blog