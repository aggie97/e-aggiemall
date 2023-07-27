import * as S from './Cart.styles';
import CartTableBodyRow from './item/CartTableRow';

import type { CartPresenterProps } from './Cart.types';
import Expense from './expense/Expense.container';

const CartPresenter = ({
  couponData,
  cartList,
  checkedProducts,
  onSelectProduct,
  onSelectAllProducts,
}: CartPresenterProps) => (
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
                  checkedProducts.length === 0 ? false : checkedProducts.length === cartList.length
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
        {cartList.map((cartItem) => (
          <CartTableBodyRow
            key={cartItem.item_no}
            cartItem={cartItem}
            checked={checkedProducts.some(({ item_no }) => item_no === cartItem.item_no)}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </tbody>
    </table>
    <Expense checkedProducts={checkedProducts} couponData={couponData} />
  </S.CartPageWrapper>
);

export default CartPresenter;
