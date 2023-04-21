import React, { useEffect } from "react";
import Progress from "../components/nprogress/Progress";
import CardComponent from "../components/PictureCardComponent";
import PaginationComponent from "../components/PaginationComponent";
import { Alert } from "react-bootstrap";
import axios from "axios";

const Pictures = () => {
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    const getPhotos = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/photos`);
        setPhotos(res.data.data.photos);
        // setPhotos([]);
        setLoading(false);
      } catch (err) {}
    };
    getPhotos();
  }, []);

  return (
    <>
      <Progress isAnimating={loading} key={0} />
      <h4 className="mt-5 fw-bold">Pictures</h4>

      {loading ? (
        <span className="sr-only">Loading... </span>
      ) : (
        <>
          {photos.length !== 0 ? (
            <>
              <CardComponent photos={photos} />
              <PaginationComponent />
            </>
          ) : (
            <Alert variant="danger" className="container-fluid" dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Try to refresh this page or maybe data you are looking for is
                not exists
              </p>
            </Alert>
          )}
        </>
      )}
    </>
  );
};

export default Pictures;
