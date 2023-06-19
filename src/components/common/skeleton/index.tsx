import styled from 'styled-components';

const SkeletonStyle = styled.div`
  width: 100px;
  height: 1rem;
  margin: 10px 0;

  @keyframes gradient {
    0% {
      background-color: rgb(165 165 165 / 0.1);
    }
    50% {
      background-color: rgb(165 165 165 / 0.3);
    }
    100% {
      background-color: rgb(165 165 165 / 0.1);
    }
  }

  animation: gradient 1.8s infinite ease-in-out;
`;

const Skeleton = () => {
  return <SkeletonStyle />;
};

export default Skeleton;
