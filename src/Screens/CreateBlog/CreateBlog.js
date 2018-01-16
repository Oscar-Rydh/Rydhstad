import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { createBlog } from '../../Store/Actions/CreateBlog';
import { Button } from 'antd';
import './CreateBlog.css'
const { TextArea } = Input;

class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '', text: '' }

  }

  render() {
    return (
      <div>
        <form>
          <h2> Blog Title </h2>
          <TextArea
            placeholder="Vad handlar inlägget om"
            autosize
            value={this.state.title}
            onChange={e => { this.setState({ title: e.target.value }) }}
          />
          <h2> Blog content </h2>
          <TextArea
            placeholder="Blog text"
            autosize={{ minRows: 6 }}
            value={this.state.text}
            onChange={e => { this.setState({ text: e.target.value }) }}
          />
          <Button 
          type="primary" 
          onClick={() => this.props.onSubmitClick(this.state.title, this.state.text, this.props.currentUser)}>
            Skapa Blog
          </Button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitClick: (title, text, owner) => {
      dispatch(createBlog(title, text, owner));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);