import { BG_IMG_URL } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed pt-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${BG_IMG_URL})`,
      }}
    >
      <div className="search-bar max-w-2xl mx-auto px-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="What do you want to watch today?"
            className="flex-1 bg-black/80 text-white px-6 py-4 rounded-lg border border-gray-600 focus:outline-none focus:border-cinegpt-accent placeholder:text-gray-400"
          />
          <button className="bg-cinegpt-accent px-8 py-4 rounded-lg text-white font-medium hover:bg-cinegpt-accent/80 transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
