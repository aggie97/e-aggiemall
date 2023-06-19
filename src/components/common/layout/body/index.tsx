import styled from 'styled-components';

const Body = ({ children }: { children: JSX.Element }) => {
  return <BodyBox>{children}</BodyBox>;
};

export default Body;

const BodyBox = styled.div`
  outline: 1px solid green;
`;
