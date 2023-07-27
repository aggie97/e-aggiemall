import styled from 'styled-components';

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  background-color: rgba(255 255 255 /0.5);
  backdrop-filter: blur(2px);
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    padding-left: 2rem;
    background-color: transparent;
  }
`;

const Header = () => {
  return (
    <>
      <div style={{ width: '100%', height: '80px' }} />
      <HeaderBox>
        <h1>Aggie-Mall</h1>
        <div>장바구니 아이콘</div>
      </HeaderBox>
    </>
  );
};

export default Header;
