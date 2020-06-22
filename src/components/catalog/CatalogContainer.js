import React from 'react';
import VideoCard from './video-card/VideoCard';
import Row from 'react-bootstrap/Row';
import WaveLoader from '../loader/WaveLoader';
import MovieService from '../../service/MovieService';

export default class CatalogContainer extends React.Component {

  state = {
    videos: undefined
  };

  componentDidMount() {
    MovieService.discoverNewMovies().then(movies => {
      this.setState({videos: movies});
    });
  }

  render() {
    let {videos} = this.state;
    return (
      <div id='catalog-container' className='container-fluid'>
        <Row>
          {!videos ? (
            <WaveLoader/>
          ) : (
            <React.Fragment>
              {videos.length > 0 ? (
                videos.map(video => <VideoCard video={video} key={video.id}/> )
              ) : (
                <div id='no-results-container'>No results found</div>
              )}
            </React.Fragment>
          )}
        </Row>
      </div>
    );
  }
}