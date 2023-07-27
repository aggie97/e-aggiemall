import Image from 'next/image';
import Link from 'next/link';
import { type ChangeEvent } from 'react';

import useCart from 'src/hooks/useCart';
import type { CartItem } from 'src/types/types';

interface CartTableBodyRowProps {
  cartItem: CartItem;
  onSelectProduct: (checked: boolean, item: CartItem) => void;
  checked: boolean;
}

function CartTableBodyRow({ cartItem, onSelectProduct, checked }: CartTableBodyRowProps) {
  const { changeItemCount } = useCart();

  const onChangeCount = (event: ChangeEvent<HTMLSelectElement>) => {
    changeItemCount(cartItem.item_no, Number(event.target.value));
  };

  return (
    <tr className="cart-deal-item" key={cartItem.item_no}>
      <td>
        <input
          type="checkbox"
          onChange={(event) => onSelectProduct(event.target.checked, cartItem)}
          checked={checked}
        />
      </td>
      <td>
        <Link href={`/products/${cartItem.item_no}`}>
          <Image
            src={cartItem.detail_image_url}
            width={78}
            height={78}
            alt={cartItem.item_name}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcYAwAAVkAxbGRRlAAAAAASUVORK5CYII="
          />
        </Link>
      </td>
      <td colSpan={2}>
        <div className="product-info">
          <Link href={`/products/${cartItem.item_no}`}>
            <span>{cartItem.item_name}</span>
          </Link>
        </div>
        <div className="product-select-count">
          {cartItem.price.toLocaleString()} x{' '}
          <select onChange={onChangeCount}>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
        </div>
      </td>
      <td>{(cartItem.price * (cartItem.count ?? 1)).toLocaleString()}원</td>
    </tr>
  );
}

export default CartTableBodyRow;
