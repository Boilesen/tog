import React from 'react';

const ArticleCards = ({ imgSrc, title, creatorInfo = {} }) => {
  const { name, photo, job, tags, readingTime } = creatorInfo;
  return (
    <div className='card'>
      <img src={imgSrc || ''} className='card-img-top' alt='...' style={{ height: '12rem' }} />
      <div className='card-body'>
        <h5 className='card-title fs-2'>{title}</h5>
      </div>
      <div className='card-footer'>
        <div className='row'>
          <div className='col-6 d-flex align-items-center border-end border-dark'>
            <img src={photo} alt='photo' />
            <div>
              <small className='fw-bold d-block'>{name}</small>
              <small>{job}</small>
            </div>
          </div>
          <div className='col-4 border-end border-dark'>
            <small className='fw-bold d-block'>THEMES</small>
            {tags.map((tag, i) => (
              <small>
                {tag}
                {i < tags.length - 1 ? ', ' : ''}
              </small>
            ))}
          </div>
          <div className='col'>
            <small className='fw-bold d-block'>TEMPS</small>
            <small>{readingTime}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCards;
