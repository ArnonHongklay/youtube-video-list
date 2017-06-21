function fetchYoutubeAPIWithChannel() {
  let id = 'UUy_85vQ6tUvYvNR_B2htuTw';
  let token = 'AIzaSyBf-beJ5_F6xRVAGlHgfmbBOEfq-zIYbHc';
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C+snippet&maxResults=25&playlistId=${id}&key=${token}`,
  ).then(response => response.json());
}

export function fetchVideoList() {
  return fetchYoutubeAPIWithChannel();
}

function fetchYoutubeAPI() {
  let id = 'UUy_85vQ6tUvYvNR_B2htuTw';
  let token = 'AIzaSyBf-beJ5_F6xRVAGlHgfmbBOEfq-zIYbHc';
  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key={YOUR_API_KEY}`,
  ).then(response => response.json());
}

export function fetchChannel() {
  return fetchYoutubeAPI();
}
