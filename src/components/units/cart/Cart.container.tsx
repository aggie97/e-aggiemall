import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { cartListState } from 'src/store/store';
import CartPresenter from './Cart.presenter';

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
