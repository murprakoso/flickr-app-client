import axios from 'axios';
import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import CardComponent from '../components/FeedCardComponent';
import Progress from '../components/nprogress/Progress';
import PaginationComponent from '../components/PaginationComponent';

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    const getPhotos = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/feeds`);
        // console.log(res.data);
        setPhotos(res.data.data);
        setLoading(false);
      } catch (err) {}
    };
    getPhotos();
  }, []);

  return (
    <>
      {' '}
      <Progress isAnimating={loading} key={0} />
      <h4 className='mt-5 fw-bold'>Home</h4>
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

export default Home;
