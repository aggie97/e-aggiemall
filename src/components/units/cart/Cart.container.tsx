import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { cartListState } from 'src/store/store';
import CartPresenter from './Cart.presenter';

const CartContainer = () => {
  // TODO: 체크박스 클릭 시, 체크박스 셀 ref 또한 작동해서 연속 2번 클릭되는 것 해결하기
  const productCheckRef = useRef<HTMLInputElement>(null);
  const onClickCheckboxCell = () => {
    productCheckRef.current?.click();
  };

  const cartList = useRecoilValue(cartListState);
  const [checkedProducts, setCheckedProducts] = useState<number[]>([]);

  const onSelectProduct = (checked: boolean, itemId: number) => {
    if (checked) setCheckedProducts((prev) => [itemId, ...prev]);
    else setCheckedProducts((prev) => prev.filter((id) => itemId !== id));
  };

  const onSelectAllProducts = (checked: boolean) => {
    if (checked) {
      setCheckedProducts(cartList.map((el) => el.item_no));
      return;
    }
    setCheckedProducts([]);
  };

  return (
    <CartPresenter
      cartList={cartList}
      onSelectProduct={onSelectProduct}
      onSelectAllProducts={onSelectAllProducts}
      checkedProducts={checkedProducts}
      productCheckRef={productCheckRef}
      onClickCheckboxCell={onClickCheckboxCell}
    />
  );
};

export default CartContainer;
