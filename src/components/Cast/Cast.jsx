import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListItem, StyledList } from './Cast.module';
import { getCastMovie } from 'helpers/getMovies';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (e) {}
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <StyledList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <ListItem key={id}>
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </ListItem>
          ))}
        </StyledList>
      }
    </>
  );
};

export default Cast;
