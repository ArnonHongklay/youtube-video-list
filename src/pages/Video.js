import React, { Component } from 'react';
import VideoDetail from 'components/VideoDetail';

class Video extends Component {
  render() {
    return <VideoDetail video={this.props.match.params.id} />;
  }
}

export default Video;
