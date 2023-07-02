import styled from 'styled-components';

const BodyBox = styled.div`
  outline: 1px solid green;
`;

const Body = ({ children }: { children: JSX.Element }) => {
  return <BodyBox>{children}</BodyBox>;
};

export default Body;
