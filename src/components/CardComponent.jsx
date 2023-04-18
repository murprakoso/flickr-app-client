import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardComponent.css';

const CardComponent = () => {
  return (
    <>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        <div className='col'>
          <Link to='/single-image'>
            <Card className='text-white shadow-sm card__content'>
              <Card.Img
                src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
                alt='Card image'
                width={100}
                height={270}
              />
              <Card.ImgOverlay className='card__img_overlay'>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </div>
        <div className='col'>
          <Link to='/single-image'>
            <Card className='text-white shadow-sm'>
              <Card.Img
                src='https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
                alt='Card image'
                width={100}
                height={270}
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </div>
        <div className='col'>
          <Link to='/single-image'>
            <Card className='text-white shadow-sm'>
              <Card.Img
                src='https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                alt='Card image'
                width={100}
                height={270}
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
