import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Progress from "../components/nprogress/Progress";

const SingleImage = () => {
  const [loading, setLoading] = useState(false);
  const { photoId } = useParams();
  const [info, setInfo] = useState("");

  useEffect(() => {
    setLoading(true);
    const getInfo = async () => {
      const res = await axios.get(
        `http://localhost:4000/api/photos/${photoId}`
      );
      setInfo(res.data.data);
      setLoading(false);
    };

    getInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Progress isAnimating={loading} key={0} />
      <div className="mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h4 className="fw-bold">{info.title?._content}</h4>
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h4 className="featurette-heading">{info.owner?.username}</h4>
                <p className="lead"></p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: "<p>" + info.description?._content + "</p>",
                  }}
                />
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width={500}
                  height={500}
                  src={info.url}
                  alt={info.id}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleImage;
