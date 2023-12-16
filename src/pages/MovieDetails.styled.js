import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 60px;
  /* width: 580px; */
`;

export const HeadWrapper = styled.div`
  display: flex;
  gap: 45px;
  margin-bottom: 45px;
`;
export const InfoWrapper = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 300px;
  height: 444px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;
`;
export const TitleSecond = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;
`;

export const TextOverview = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  line-height: 2.5cap;
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  font-family: 'Lato', sans-serif;

  li:not(:last-child) {
  }

  li:last-child {
    margin-right: 25px;
  }
`;

export const StyledLi = styled.li`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
`;
