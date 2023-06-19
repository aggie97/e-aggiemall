import styled from 'styled-components';

export const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ListBox = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 250px);
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);
  justify-content: center;
  place-items: center center;
`;

export const CartZone = styled.section`
  padding-top: 5rem;
`;

export const MovingCart = styled.div`
  position: sticky;
  border: 1px solid black;
  width: 100px;
  height: 300px;
  top: 2rem;
`;
