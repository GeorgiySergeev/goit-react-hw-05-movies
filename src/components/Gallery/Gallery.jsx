import { MovieCard } from 'components/MovieCard/MovieCard';
import { GalleryStyled } from './Gellery.styled';

export const Gallery = ({ gallery }) => {
  return (
    <GalleryStyled>
      {gallery.map(
        ({ id, poster_path, title, name, popularity, release_date }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              img={poster_path}
              title={title || name}
              rating={popularity}
              relise={release_date}
            ></MovieCard>
          );
        }
      )}
    </GalleryStyled>
  );
};
