import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavItem, NavList, Navigation } from './SharedLayout.module';

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
                the movie is something incredible...Cinema is life, where the
                most boring scenes were cut out..only $5 per ticket and you will
                stop being bored
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
