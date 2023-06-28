import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../types/types';
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
      <ul className="cart-content">
        {cartList.map((product) => (
          <li className="product-in-cart">
            <input
              type="checkbox"
              onChange={(event) => onSelectProduct(event.target.checked, product.item_no)}
              checked={checkedProducts.includes(product.item_no)}
            />
            <div className="product-info">
              <Link href={`/products/${product.item_no}`}>
                <Image
                  alt={product.item_name}
                  src={product.detail_image_url}
                  width={78}
                  height={78}
                />
              </Link>
              <Link href={`/products/${product.item_no}`}>{product.item_name}</Link>
              <span>{product.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </S.CartPageWrapper>
  );
};

export default CartPresenter;
