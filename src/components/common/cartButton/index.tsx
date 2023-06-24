import styled from 'styled-components';
import Image from 'next/image';
import { MouseEvent } from 'react';

interface CartButtonProps {
  mode: 'toggle' | 'nonToggle';
  onClickButton: (event: MouseEvent<HTMLButtonElement>) => void;
  isInCart: boolean;
}

const CartStyledButton = styled.button<Pick<CartButtonProps, 'mode'>>`
  border: transparent;
  cursor: pointer;
  * {
    vertical-align: bottom;
    background-color: ${({ mode }) => (mode === 'toggle' ? '#eee' : 'transparent')};
    padding: 0.25rem;
    border-radius: 5px;
  }

  :hover * {
    background-color: #ddd;
  }
`;

const CartButton = ({ mode, onClickButton, isInCart }: CartButtonProps) => {
  return (
    <CartStyledButton type="button" mode={mode} onClick={onClickButton}>
      <Image
        width={35}
        height={35}
        alt="cartIcon"
        src={isInCart ? '/icons/alreadyInCart.png' : '/icons/addProductToCart.png'}
      />
    </CartStyledButton>
  );
};

export default CartButton;
