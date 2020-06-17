import Card from 'react-bootstrap/Card';
import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import './video-card.scss';
import RatingStars from './RatingStars';

const VideoCard = (props) => {
  const moment = require('moment');

  return (
    <Col xs={12} sm={6} md={3}>
      <Card className='video-card'>
        <Card.Img variant='top' src={`${props.video.baseUrl}${props.video.backdropSizes[2]}${props.video.backdropPath}`}/>
        <Card.Body className='video-card__body'>
          <Card.Title className='video-card__title'>{props.video.title}</Card.Title>
          <div className='d-flex justify-content-between'>
            <div>{moment(props.video.releaseDate).format('MMM YYYY')}</div>
            <RatingStars rating={props.video.voteAverage}/>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

};

export default VideoCard;