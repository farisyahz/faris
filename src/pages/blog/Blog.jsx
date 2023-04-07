import React from 'react'
import './Blog.css'
import { blogs } from '../../Data'
import BlogList from '../../components/blogList/BlogList'

const Blog = () => {
  return (
    <div className="blog">
      <h1>Writing</h1>
      <div className="year 2023">
        <h2>2023</h2>
        {blogs[2023].map(blog => {
          return(<BlogList item={blog}/>)
        })}
      </div>
    </div>
  )
}

export default Blog