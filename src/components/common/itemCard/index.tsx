import { type ReactNode } from 'react';
import styled from 'styled-components';

interface ItemCardProps {
  children: JSX.Element | ReactNode;
}
const StyledCardWrapper = styled.div`
  height: 300px;

  gap: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 15px 3px rgb(0 0 0/0.1);
  }
  transition: box-shadow 0.2s ease-in-out;

  .divider {
    padding-bottom: 10px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    object-fit: cover;
    object-position: center center;
  }

  a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }
`;

const ItemCard = ({ children }: ItemCardProps) => {
  return <StyledCardWrapper>{children}</StyledCardWrapper>;
};

export default ItemCard;
