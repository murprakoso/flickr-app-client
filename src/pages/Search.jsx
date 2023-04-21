import axios from "axios";
import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import CardComponent from "../components/PictureCardComponent";
import Progress from "../components/nprogress/Progress";
import PaginationComponent from "../components/PaginationComponent";
import { useLocation } from "react-router-dom";

// query string
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);
  const query = useQuery().get("q");

  useEffect(() => {
    setLoading(true);

    const getPhotos = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/search?tags=${query}`
        );
        setPhotos(res.data.data.photos);
        setLoading(false);
      } catch (err) {}
    };

    if (query !== "") {
      getPhotos();
    }
  }, [query]);

  return (
    <>
      <Progress isAnimating={loading} key={0} />
      <h4 className="mt-5 fw-bold">Search : {query}</h4>

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

export default Search;
