import React, { useEffect } from 'react';
import Progress from '../components/nprogress/Progress';
import CardComponent from '../components/PictureCardComponent';
import PaginationComponent from '../components/PaginationComponent';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const Pictures = () => {
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    const getPhotos = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/photos`);
        // console.log(res.data);
        setPhotos(res.data.data.photos);
        setLoading(false);
      } catch (err) {}
    };
    getPhotos();
  }, []);

  return (
    <>
      <Progress isAnimating={loading} key={0} />
      <h4 className='mt-5 fw-bold'>Pictures</h4>
      {photos ? (
        <CardComponent photos={photos} />
      ) : (
        <Alert variant='danger' className='container-fluid' dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      )}
      <PaginationComponent />
    </>
  );
};

export default Pictures;
