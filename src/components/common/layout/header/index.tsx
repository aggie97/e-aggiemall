import styled from 'styled-components';

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  outline: 1px solid blue;
  background-color: #fff;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    padding-left: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderBox>
      <h1>Aggie-Mall</h1>
      <div>장바구니 아이콘</div>
    </HeaderBox>
  );
};

export default Header;
