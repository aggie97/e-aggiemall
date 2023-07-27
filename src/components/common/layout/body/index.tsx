import styled from 'styled-components';

const BodyBox = styled.div`
  min-height: 100vh;
`;

const Body = ({ children }: { children: JSX.Element }) => {
  return <BodyBox>{children}</BodyBox>;
};

export default Body;
