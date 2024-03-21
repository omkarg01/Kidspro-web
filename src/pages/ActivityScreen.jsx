import React from "react";
import PageTitle from "../components/PageTitle";
import { Link, useLocation } from "react-router-dom";
import VideoFrame from "../components/VideoFrame";

const ActivityScreen = () => {
  const location = useLocation();
  const receivedData = location.state?.data;
  const type = location.state?.type;
  const filteredData = receivedData.filter((each) => each.type === type);
  console.log("filteredData", filteredData);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      {/* <!-- Section: page title --> */}
      <PageTitle title={capitalizeFirstLetter(type)} />

      {/* <!-- News --> */}
      <section>
        <div class="container mt-30 mb-30 pt-30 pb-30">
          <div class="row">
            <div class="col-md-10 order-lg-2 mx-auto">
              <Link
                class="btn btn-theme-colored1 btn-round btn-circled mb-20"
                to={"/"}
              >
                Return Home
              </Link>
              <div class="blog-posts">
                {filteredData.length !== 0 ? (
                  filteredData.map((each) => <VideoFrame video={each} />)
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <h1>No Videos to show! </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityScreen;
