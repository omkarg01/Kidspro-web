import React from "react";
import { Link } from "react-router-dom";

const VideoFrame = ({video}) => {
    console.log("gallery", video);
  return (
    <article class="post clearfix mb-30 pb-30">
      <div class="entry-header">
        <div class="post-thumb thumb">
          <iframe
            width="950"
            height="540"
            src={video.video}
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="entry-content border-1px p-20 pr-10">
        <div class="entry-meta mt-0">
          <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
            <i class="far fa-calendar-alt mr-10 text-theme-colored1"></i> {video.date}
          </span>
        </div>
        <h4 class="entry-title">
          <h3>{video.title}</h3>
        </h4>
        <p class="mt-10">
          {video.description}
        </p>
        {/* <Link to={"1"}>Read more</Link> */}
        <div class="clearfix"></div>
      </div>
    </article>
  );
};

export default VideoFrame;
