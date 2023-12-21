import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavItem, NavList, Navigation } from './SharedLayout.module';
// import { PageNotFound } from '../../pages/PageNotFound/PageNotFound';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">Movies</Link>
            </NavItem>
            <h1 class="marquee">
              <span>
               Щодо зараз, є бажання $5 викласти? 🎅.....Mary Christmas, Oleksii ✌ !!
 
              </span>
            </h1>
          </NavList>
        </Navigation>
      </header>
          
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
