import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 25px;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 30px;
  padding: 14px;

  /* background-image: url('/public/77M1.gif'); */

  background: rgba(255, 255, 255, 0.1); 
 background-blend-mode: overlay;
  backdrop-filter: blur(50px);
  border-radius: 20px;


  @-webkit-keyframes scroll {
    0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    100% {
        -webkit-transform: translate(-100%, 0);
        transform: translate(-100%, 0)
    }
}
 
@-moz-keyframes scroll {
    0% {
        -moz-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    100% {
        -moz-transform: translate(-100%, 0);
        transform: translate(-100%, 0)
    }
}
 
@keyframes scroll {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0)
    }
}
 
.marquee {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    font-size: 30px;
}
 
.marquee span {
    display: inline-block;
    padding-left: 100%;
    -webkit-animation: scroll 10s infinite linear;
    -moz-animation: scroll 10s infinite linear;
    animation: scroll 20s infinite linear;
}
  
`;

export const NavItem = styled.li`
  span {
    color: #1d66c5;
    transition: all 0.5s ease-in;

  }

  a:hover,
  a:focus {
    color: #1d66c5;
    transition: all 0.5s ease-in;
    span {
      color: white;
      
    }
  }
`;
