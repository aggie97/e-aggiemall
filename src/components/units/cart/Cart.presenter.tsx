import Image from 'next/image';
import Link from 'next/link';
import { Product } from 'src/types/types';
import * as S from './Cart.styles';

interface CartPresenterProps {
  cartList: Product[];
  checkedProducts: number[];
  onSelectProduct: (checked: boolean, itemId: number) => void;
}

const CartPresenter = ({ cartList, checkedProducts, onSelectProduct }: CartPresenterProps) => {
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
                <input type="checkbox" />
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
            <tr className="cart-deal-item">
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <Link href={`/products/${product.item_no}`}>
                  <Image
                    src={product.detail_image_url}
                    width={78}
                    height={78}
                    alt={product.item_name}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcYAwAAVkAxbGRRlAAAAAASUVORK5CYII="
                  />
                </Link>
              </td>
              <td colSpan={2}>
                <div className="product-info">
                  <Link href={`/products/${product.item_no}`}>
                    <span>{product.item_name}</span>
                  </Link>
                </div>
                <div className="product-select-count">
                  <select>
                    {Array.from({ length: 10 }, (_, index) => (
                      <option>{index + 1}</option>
                    ))}
                  </select>
                </div>
              </td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.CartPageWrapper>
  );
};

export default CartPresenter;
