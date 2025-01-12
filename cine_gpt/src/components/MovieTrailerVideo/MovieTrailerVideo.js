const MovieTrailerVideo = ({ movieVideoId }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cinegpt-dark via-transparent to-transparent z-20"></div>
      
      <div className="w-full h-screen">
        <iframe 
          className="w-full h-[120vh] -mt-[10vh] scale-125 object-cover"
          src={`https://www.youtube.com/embed/${movieVideoId}?autoplay=1&mute=1&loop=1&playlist=${movieVideoId}&modestbranding=1&showinfo=0&controls=0&fs=0&rel=0&iv_load_policy=3`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailerVideo;
