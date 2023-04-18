import React, { useEffect } from 'react';
import Progress from '../components/nprogress/Progress';
import CardComponent from '../components/CardComponent';

const Pictures = () => {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Progress isAnimating={loading} key={0} />
      <h4 className='mt-5 fw-bold'>Pictures</h4>
      <CardComponent />
    </>
  );
};

export default Pictures;
