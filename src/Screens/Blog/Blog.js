import React from 'react';
import BlogImage from '../../Components/BlogImage';
import './Blog.css';

const Blog = (props) => {
  const blogImages = props.images.map(image => {
    return <BlogImage href={image.href} description={image.description} />
  })

  return (
    <div className="Blog">
      <h1> {props.title} </h1>
      <hr/>
      <p className="BlogText">
        {props.text}
      </p>
      {blogImages}
      <hr/>
    </div>
  )
}

export default Blog;