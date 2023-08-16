import { ChangeEvent, useState } from 'react';

import useCart from 'src/hooks/useCart';
import DetailPresenter from './Detail.presnter';
import type { DetailContainerProps } from './Detail.types';

const DetailContainer = ({ product }: DetailContainerProps) => {
  const { setItemToCart } = useCart();

  const [count, setCount] = useState(1);

  const onClickCartButton = () => {
    setItemToCart({ ...product }, count);
    alert('상품이 장바구니에 담겼습니다.');
  };
  const onChangeCount = (event: ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(event.target.value));
  };
  return (
    <DetailPresenter
      product={product}
      onClickCartButton={onClickCartButton}
      onChangeCount={onChangeCount}
      count={count}
    />
  );
};

export default DetailContainer;
