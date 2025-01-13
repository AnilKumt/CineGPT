import { IMAGE_URL } from "../../utils/constants";
import { useState } from "react";

const MovieCard = ({imageId, title}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative flex-none transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative rounded-lg overflow-hidden">
                <img 
                    className="w-48 h-72 object-cover rounded-lg" 
                    src={IMAGE_URL + imageId} 
                    alt={title}
                    loading="lazy"
                />
                {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                        <h3 className="text-white text-sm font-medium line-clamp-2">
                            {title}
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
