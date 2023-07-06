import { RefObject } from 'react';
import { Product } from 'src/types/types';
import * as S from './Cart.styles';
import CartTableBodyRow from './item/CartTableRow';

interface CartPresenterProps {
  cartList: Product[];
  checkedProducts: number[];
  onSelectProduct: (checked: boolean, itemId: number) => void;
  onSelectAllProducts: (checked: boolean) => void;
  productCheckRef: RefObject<HTMLInputElement>;
  onClickCheckboxCell: () => void;
}

const CartPresenter = ({
  cartList,
  checkedProducts,
  onSelectProduct,
  onSelectAllProducts,
  productCheckRef,
  onClickCheckboxCell,
}: CartPresenterProps) => {
  return (
    <S.CartPageWrapper>
      <section className="cart-title">
        <h1>장바구니</h1>
      </section>
      <table className="cart-table">
        <thead>
          <tr className="table-head">
            <th scope="col">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => onSelectAllProducts(event.target.checked)}
                  checked={
                    checkedProducts.length === 0
                      ? false
                      : checkedProducts.length === cartList.length
                  }
                />
                <span>&nbsp;&nbsp;전체선택</span>
              </label>
            </th>
            <th scope="colgroup" colSpan={3}>
              상품정보
            </th>
            <th scope="col">상품금액</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => (
            <CartTableBodyRow
              product={product}
              checkedProducts={checkedProducts}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </tbody>
      </table>
    </S.CartPageWrapper>
  );
};

export default CartPresenter;
