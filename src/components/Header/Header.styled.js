import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0px;

  padding: 18px 15px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: '0px 4px 10px 4px #9e9e9e';
  background-color: #000;

  height: 839px;
`;

export const Input = styled.input`
  cursor: pointer;
  /* position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 1;
  z-index: -1; */
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  a {
  }
  gap: 15px;
`;

export const NavButton = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 41px;
`;

export const Form = styled.div`
  width: 117.75px;
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 12px;
  }
  margin-bottom: 25px;
`;

export const HeadTitle = styled.h1`
  color: #f33f3f;
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-size: 48px;
`;

export const AddToListButton = styled.button`
  width: 100%;
  height: 41px;
  background-color: #f33f3f;
  color: #141414;
  margin-top: 15px;
`;
