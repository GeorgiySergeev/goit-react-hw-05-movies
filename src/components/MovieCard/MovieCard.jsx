import { NavLink, useParams } from 'react-router-dom';
import {
  GalleryItem,
  ImageGalleryItemImage,
  RatingBox,
  InfoBox,
  IconAddToListStyled,
} from './MovieCard.styled';

import { ReactComponent as IconLow } from '../../assets/icons/awful _35.svg';
import { ReactComponent as IconNormal } from '../../assets/icons/normal _35 and _80.svg';
import { ReactComponent as IconHigh } from '../../assets/icons/great _ 80.svg';

export const MovieCard = ({ id, img, title, rating, relise = 'no info' }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <GalleryItem>
      <IconAddToListStyled />
      <ImageGalleryItemImage
        src={`${BASIC_IMG_URL}${img}`}
        alt={title}
        datatype={id}
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
        <h4>{title}</h4>
      </InfoBox>
    </GalleryItem>
  );
};
