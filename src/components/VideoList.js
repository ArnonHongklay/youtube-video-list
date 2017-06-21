import React, { Component } from 'react';
import { fetchVideoList } from 'api';
// import VideoListItem from './VideoListItem';

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
          etag: '"m2yskBQFythfE4irbTIeOgYYfBU/DGla5VREMtWVirZ80bWJiZelC90"',
          id: 'VVVfeDVYRzFPVjJQNnVaWjVGU005VHR3LlFrSDNEcUc5cEpz',
          snippet: {
            publishedAt: '2017-06-16T21:00:42.000Z',
            channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            title: 'The Developer Show (TL;DR 074)',
            description:
              'Android O APIs are final - https://goo.gl/Uy6PK3\nGoogle Play Billing Library - https://goo.gl/e8tNCg\nIntroducing reCAPTCHA Android API - https://goo.gl/3DjIiA\nIntroducing Blockly 1.0 for Android and iOS - https://goo.gl/tFyg2T\nMaking Dynamic Links Easier - https://goo.gl/75QygK\nApp Engine update - https://goo.gl/PfH369\nSpinnaker 1.0 - https://goo.gl/mCijEG\n \nThe Developer Show is where you can stay up to date on all the latest Google Developer news, straight from the experts. \n \nHave a question? Use #AskDevShow to let us know!\n \nSubscribe to the Google Developers Channel for more DevShow! http://goo.gl/mQyv5',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/QkH3DqG9pJs/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/QkH3DqG9pJs/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/QkH3DqG9pJs/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/QkH3DqG9pJs/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/QkH3DqG9pJs/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Google Developers',
            playlistId: 'UU_x5XG1OV2P6uZZ5FSM9Ttw',
            position: 0,
            resourceId: {
              kind: 'youtube#video',
              videoId: 'QkH3DqG9pJs',
            },
          },
          contentDetails: {
            videoId: 'QkH3DqG9pJs',
            videoPublishedAt: '2017-06-16T21:00:42.000Z',
          },
        },
      ],
    } = this.state.videos;
    console.log(items);
    const videoItems = items.map(item => {
      return (
        <div className="col-sm-4">
          <div className="card">
            <img
              className="card-img-top"
              src={item.snippet.thumbnails.standard.url}
              alt="Card image cap"
              height="240"
            />
            <div className="card-block">
              <h4 className="card-title">{item.snippet.title}</h4>
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
