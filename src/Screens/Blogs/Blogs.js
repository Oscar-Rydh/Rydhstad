import React, { Component } from 'react';
import Blog from '../Blog';
import { connect } from 'react-redux';

class Blogs extends Component {


  _renderBlogs() {
    const currentUserBlogs = this.props.blogs.filter(blog => {
      return blog.owner === this.props.currentUser;
    })
    return currentUserBlogs.map(blog => {
      return <Blog key={blog.title} title={blog.title} text={blog.text} images={blog.images} />
    })
  }


  render() {
    return (
      <div>
        {this._renderBlogs()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    blogs: state.blogs,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Blogs)