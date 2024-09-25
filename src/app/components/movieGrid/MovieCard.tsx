import { IMAGE_SIZES } from "@/app/services/api/Images";
import { Movie } from "@/app/types/movie";
import * as getImage from '../../services/api/Images';
import ImageWithHoverText from "./ImageWithHoverText";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({
    movie
  }) =>{
    return (
      <div key={movie.id} className="relative flex flex-col items-center p-1">
          <ImageWithHoverText
            imageUrl={getImage.posterUrl(movie.backdrop_path, IMAGE_SIZES.backdrop.medium)}
            altText={movie.title}
            hoverText={movie.title}
          />
      </div>
    );
}

export default MovieCard;