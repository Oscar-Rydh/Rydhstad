import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { createBlog } from '../../Store/Actions/CreateBlog';
import { Button } from 'antd';
import './CreateBlog.css'
const { TextArea } = Input;


// TODO: HANDLE EMPTY FIELDS
class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '', text: '', imageLink: '', imageDescription: '', uploadedImages: [] }

  }

  renderPreviewUploads() {
    if (this.state.uploadedImages.length > 0) {
      const imageCols = this.state.uploadedImages.map((image) => {
        return (
          <Col span={6} style={{marginTop: 10}} >
            <img alt="" src={image.href} style={{ height: 100, width: 100 }} />
            <br />
            <i> {image.description} </i>
          </Col>
        )
      });
      return imageCols;
    }
  }

  handleUpload() {
    const imageObj = {
      href: this.state.imageLink,
      description: this.state.imageDescription
    }
    this.setState({
      imageLink: '',
      imageDescription: '',
      uploadedImages: [imageObj, ...this.state.uploadedImages]
    })
  }

  handleCreateBlog() {
    this.props.onSubmitClick(
      this.state.title,
      this.state.text,
      this.props.currentUser,
      this.state.uploadedImages
    )
    this.setState({title: '', text: '', imageLink: '', imageDescription: '', uploadedImages: []})
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
          <div className="ImageUploader">
            <h2> Images </h2>
            <Input
              placeholder="Länk till bild"
              value={this.state.imageLink}
              onChange={e => { this.setState({ imageLink: e.target.value }) }}
            />
            <TextArea
              placeholder="Beskrivning av Bild"
              value={this.state.imageDescription}
              autosize={{ minRows: 3, maxRows: 6 }}
              onChange={e => { this.setState({ imageDescription: e.target.value }) }}
            />
            <Button
              type="primary"
              icon="upload"
              style={{ marginTop: 10 }}
              onClick={() => this.handleUpload()}
            >
              Ladda upp bild
            </Button>

          </div>
          <div className="ImagePreview" >
            {<Row> {this.renderPreviewUploads()} </Row>}
          </div>
          <br/>
          <div className="CreateBlog">
            <Button style={{ marginTop: 10, width: 300 }}
              type="primary"
              onClick={() => this.handleCreateBlog()}>
              Skapa Blog
          </Button>
          </div>
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
    onSubmitClick: (title, text, owner, images) => {
      dispatch(createBlog(title, text, owner, images));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);