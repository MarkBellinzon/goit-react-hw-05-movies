import { Outlet, useLocation } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import { ListFilms, ItemFilms, Links, Card ,Img} from './FilmsList.module';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ListFilms>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <ItemFilms key={id}>
              <Links to={`/movies/${id}`} state={{ from: location }}>
                <Card>
                  {poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <AiOutlineFileImage size={200} />
                  )}
                  {title}
                </Card>
              </Links>
            </ItemFilms>
          );
        })}
      </ListFilms>
      <Outlet />
    </>
  );
};


export default MoviesList;