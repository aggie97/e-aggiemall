import styled from 'styled-components';
import Header from './header';
import Body from './body';
import Footer from './footer';

const CommonWrapper = styled.div`
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
