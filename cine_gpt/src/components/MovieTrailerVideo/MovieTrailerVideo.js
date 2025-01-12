const MovieTrailerVideo = ({ movieVideoId }) => {
  return (
    <div>
      <div className="w-full h-screen aspect-video">
        <iframe className="w-full h-screen aspect-video"
          src={`https://www.youtube.com/embed/${movieVideoId}?autoplay=1&mute=1&loop=1&playlist=${movieVideoId}&modestbranding=1&showinfo=0&controls=0&fs=0&rel=0&iv_load_policy=3`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>

      </div>
    </div>
  );
};

export default MovieTrailerVideo;