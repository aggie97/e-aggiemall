import { useEffect, useState } from 'react';

import useCart from 'src/hooks/useCart';
import type { CartItem, Coupon } from 'src/types/types';
import CartPresenter from './Cart.presenter';

const CartContainer = ({ coupons }: { coupons: Coupon[] }) => {
  const { cartList } = useCart();
  const [checkedProducts, setCheckedProducts] = useState<CartItem[]>([]);

  // cartList와 checkedProducts 동기화
  useEffect(() => {
    setCheckedProducts((prev) =>
      cartList.filter(({ item_no }) => prev.find((checked) => checked.item_no === item_no))
    );
  }, [cartList]);

  const onSelectProduct = (checked: boolean, item: CartItem) => {
    if (checked) setCheckedProducts((prev) => [item, ...prev]);
    else setCheckedProducts((prev) => prev.filter(({ item_no }) => item_no !== item.item_no));
  };

  const onSelectAllProducts = (checked: boolean) => {
    if (checked) {
      setCheckedProducts(() => cartList);
      return;
    }
    setCheckedProducts([]);
  };

  return (
    <CartPresenter
      couponData={coupons}
      cartList={cartList}
      onSelectProduct={onSelectProduct}
      onSelectAllProducts={onSelectAllProducts}
      checkedProducts={checkedProducts}
    />
  );
};

export default CartContainer;
