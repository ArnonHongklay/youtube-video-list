import React, { Component } from 'react';
import { fetchVideoList } from 'api';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class VideoList extends Component {
  state = {
    videos: {},
  };

  componentDidMount() {
    fetchVideoList().then(videos => {
      this.setState({
        videos: videos,
      });
    });
  }

  render() {
    const {
      items = [
        {
          kind: 'youtube#playlistItem',
          etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XbF_ZcuREWg1Pe76oGl-wAV_75k"',
          id: 'VVV5Xzg1dlE2dFV2WXZOUl9CMmh0dVR3LkZnLW9YYUZxelFB',
          snippet: {
            publishedAt: '2017-06-15T07:02:28.000Z',
            channelId: 'UCy_85vQ6tUvYvNR_B2htuTw',
            title: 'Highlight Startup 2017 KhonKaen Mekong Connect',
            description:
              'STARTUP THAILAND 2017 : MEKONG CONNECT\n\nStartup Thailand Special Talk “สตาร์ทอัพกับบริษัทใหญ่และ CVC แข่งขัน หรือร่วมสร้างสรรค์?” \nโดย คุณชวิน ศุภวงศ์ Co-founder, Food Story\n\n9 - 10 มิถุนายน 2560 ณ ศูนย์ประชุมอเนกประสงค์กาญจนาภิเษก มหาวิทยาลัยขอนแก่น จ.ขอนแก่น\n\nMore info --\nWebsite : http://startupthailand.org/live/\nFacebook : https://www.facebook.com/ThailandStartup\nhttp://startupthailand.org/',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/Fg-oXaFqzQA/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/Fg-oXaFqzQA/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/Fg-oXaFqzQA/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/Fg-oXaFqzQA/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/Fg-oXaFqzQA/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'StartupThailand',
            playlistId: 'UUy_85vQ6tUvYvNR_B2htuTw',
            position: 0,
            resourceId: {
              kind: 'youtube#video',
              videoId: 'Fg-oXaFqzQA',
            },
          },
          contentDetails: {
            videoId: 'Fg-oXaFqzQA',
            videoPublishedAt: '2017-06-15T07:02:28.000Z',
          },
        },
      ],
    } = this.state.videos;

    const videoItems = items.map(item => {
      return (
        <div className="col-sm-4">
          <div className="card">
            <img
              className="card-img-top"
              src={item.snippet.thumbnails.medium.url}
              alt="Card image cap"
              height="240"
            />
            <div className="card-block">
              <Link to={item.contentDetails.videoId}>
                <h4 className="card-title">{item.snippet.title}</h4>
              </Link>
              <p className="card-text description">
                {item.snippet.description}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="section">
        <div className="row">
          {videoItems}
        </div>
      </div>
    );
  }
}

export default VideoList;
