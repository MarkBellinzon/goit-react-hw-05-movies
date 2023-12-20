import styled from '@emotion/styled';

export const GoBackLink = styled.span`
  a {
    position: relative;
    padding-left: 12px;
    padding-right: 12px;
   
     border: #f71111;
     font-weight: 64px;
  }
  color: #ffffff;
margin-bottom: 20px;
  box-shadow: 0 0 5px #ee2b2b, 0 0 20px #ee2b2b, 0 0 40px #ee2b2b,
    0 0 200px #ee2b2b;
  -moz-transition: background-color 0.8s 0.1s ease;
  -o-transition: background-color 0.8s 0.1s ease;
  -webkit-transition: background-color 0.8s 0.1s ease;
 background-color: #d60e0e;
`;

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const FilmImg = styled.img`
  max-width: 182px;
  background: #969494;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
`;

export const FilmSubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const FilmDescr = styled.p`
  font-size: 16px;
  color: #aaa8a8;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 16px;
  display: flex;
  gap: 18px;
  padding: 0;

  border-radius: 20px;
  color: #aaa8a8;
  margin-bottom: 12px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;

  border-radius: 20px;
`;
export const ListItem = styled.li`
  span {
    color: #1d66c5;
  }
`;
