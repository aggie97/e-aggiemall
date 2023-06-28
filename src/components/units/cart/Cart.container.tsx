import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import CartPresenter from './Cart.presenter';
import { cartListState } from '../../../store/store';

const CartContainer = () => {
  const cartList = useRecoilValue(cartListState);
  const [checkedProducts, setCheckedProducts] = useState<number[]>([]);
  const onSelectProduct = (checked: boolean, itemId: number) => {
    if (checked) setCheckedProducts((prev) => [itemId, ...prev]);
    else setCheckedProducts((prev) => prev.filter((id) => itemId !== id));
  };

  return (
    <CartPresenter
      cartList={cartList}
      onSelectProduct={onSelectProduct}
      checkedProducts={checkedProducts}
    />
  );
};

export default CartContainer;
