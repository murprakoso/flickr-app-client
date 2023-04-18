import React, { useEffect } from 'react';
import Progress from '../components/nprogress/Progress';

const Home = () => {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {' '}
      <Progress isAnimating={loading} key={0} />
      <h1 className='mt-5'>Sticky footer with fixed navbar</h1>
      <p className='lead'>
        Pin a footer to the bottom of the viewport in desktop browsers with this
        custom HTML and CSS. A fixed navbar has been added with{' '}
        <code className='small'>padding-top: 60px;</code> on the{' '}
        <code className='small'>main &gt; .container</code>.
      </p>
      <p>
        Back to{' '}
        <a href='/docs/5.0/examples/sticky-footer/'>
          the default sticky footer
        </a>{' '}
        minus the navbar.
      </p>
    </>
  );
};

export default Home;
