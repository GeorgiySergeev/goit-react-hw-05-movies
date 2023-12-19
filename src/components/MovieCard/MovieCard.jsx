// import { Link } from 'react-router-dom';

import {
  GalleryItem,
  ImageGalleryItemImage,
  RatingBox,
  InfoBox,
  IconAddToListStyled,
} from './MovieCard.styled';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { Link } from 'react-router-dom';
import { ReactComponent as IconLow } from '../../assets/icons/awful _35.svg';
// import { ReactComponent as IconNormal } from '../../assets/icons/normal _35 and _80.svg';
import { ReactComponent as IconHigh } from '../../assets/icons/great _ 80.svg';

export const MovieCard = ({ id, img, title, rating, relise = 'no info' }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <GalleryItem>
      <IconAddToListStyled onClick={() => alert('Added to watchList')} />

      <Link to={`/movies-details/${id}`} key={id}>
        <ImageGalleryItemImage
          src={img ? `${BASIC_IMG_URL}${img}` : defaultImg}
          // src={`${BASIC_IMG_URL}${img}`}
          alt={title}
          datatype={id}
          height="180"
        />
        <InfoBox>
          <RatingBox>
            {/* <IconLow style={{ width: 20, height: 20 }} /> */}
            {rating < 100 ? (
              <IconLow style={{ width: 20, height: 20 }} />
            ) : (
              <IconHigh style={{ width: 20, height: 20 }} />
            )}
            <p> {rating}</p>
          </RatingBox>
          <h3>{title}</h3>
        </InfoBox>
      </Link>
    </GalleryItem>
  );
};
