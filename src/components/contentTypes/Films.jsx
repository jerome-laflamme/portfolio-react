import React from "react";

const films = ({ pageContent }) => {
  return (
    <>
      <p className="films-title">{pageContent.title}</p>
      <div className="films-wrapper">
        {pageContent.videos.map((video, index) => (
          <div className="short-container" key={index}>
            <p className="video-title">{video.title}</p>
            <iframe
            className="video"
              src={`https://www.youtube.com/embed/${video.embedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default films;
