import styled from 'styled-components';
import Header from './header';
import Body from './body';
import Footer from './footer';

const CommonWrapper = styled.div`
  outline: 1px solid black;
  position: relative;
`;

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <CommonWrapper>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </CommonWrapper>
  );
};

export default Layout;
