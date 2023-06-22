import { MouseEvent } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

import { cartListState } from '../../../store/store';
import useMoveTo from '../../../utils/MoveTo';
import type { Product } from '../../../types/types';

interface CartButtonProps {
  mode: 'toggle' | 'nonToggle';
  data?: Product;
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

const CartButton = ({ mode, data }: CartButtonProps) => {
  const [cartList, setCartList] = useRecoilState(cartListState);
  // 토글 모드라면, 카트 전역 상태에 따라 카트 포함 여부로 분기
  const isInCart = cartList.some((product) => product.item_no === data?.item_no);
  const imageUrl =
    mode === 'nonToggle'
      ? '/icons/cart.png'
      : isInCart
      ? '/icons/alreadyInCart.png'
      : '/icons/addProductToCart.png';
  const { onClickMoveTo } = useMoveTo();

  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (mode === 'nonToggle') {
      onClickMoveTo('/cart');
      return;
    }
    // 장바구니에
    // 없다면 담기
    // 있다면 빼기
    if (isInCart) {
      setCartList((oldCartList) =>
        oldCartList.filter((product) => product.item_no !== data?.item_no)
      );
    } else {
      setCartList((oldCartList) => [...oldCartList, { ...(data as Product) }]);
    }
  };

  console.log(cartList, data?.item_no);
  // TODO: 전역으로 상태를 관리하는데 왜 버튼 하나 클릭할 때 마다 전부 리렌더링이 되는가...
  return (
    <CartStyledButton type="button" mode={mode} onClick={onClickButton}>
      <Image width={35} height={35} alt="cartIcon" src={imageUrl} />
    </CartStyledButton>
  );
};

export default CartButton;
