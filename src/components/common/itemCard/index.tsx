import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

interface ItemCardProps {
  children: JSX.Element | ReactNode;
  onClick: (event: MouseEvent) => void;
}
const StyledCardWrapper = styled.div`
  padding: 0.5rem;
  height: 300px;
  display: flex;
  flex-direction: column;

  gap: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 15px 3px rgb(0 0 0/0.1);
  }
  transition: box-shadow 0.2s ease-in-out;
`;

const ItemCard = ({ onClick, children }: ItemCardProps) => {
  return <StyledCardWrapper onClick={onClick}>{children}</StyledCardWrapper>;
};

export default ItemCard;
