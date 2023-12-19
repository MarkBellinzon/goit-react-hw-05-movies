import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListFilms = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

export const ItemFilms = styled.li`
  list-style: none;
  padding: 20px;
  /* margin: 0; */
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #ffffff;
   :hover {
    color: #1d66c5;
    text-shadow: 1px 1px 2px #0e2a50;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 200px;
  height: 300px;
  margin-bottom: 20px;
  transition: all 0.5s ease-in;
  /* border: 1px solid #ffffff; */

  :hover {
    scale: 1.05;
    transition: all 0.5s ease-in;
  }
`;

export const Img = styled.img`
  width: 200px;
`;
