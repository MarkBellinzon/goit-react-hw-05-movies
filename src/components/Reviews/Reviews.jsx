import { ListItem, StyledList } from 'pages/MoviesDetals/MoviesDetals.module';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  return (
    <StyledList>
      <ListItem>
        <p>
          <span>Autor</span>
        </p>
      </ListItem>
    </StyledList>
  );
};
