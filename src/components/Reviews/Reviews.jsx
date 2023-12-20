import { getReviewsMovie } from 'helpers/getMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledList, ListItem, ReviewsDescr } from './Reviews.module';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem>
          <p>
            <span>Author:</span> {author}
          </p>
          <ReviewsDescr>{content}</ReviewsDescr>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default Reviews;
