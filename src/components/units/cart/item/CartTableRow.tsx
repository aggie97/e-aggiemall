import { Product } from '@src/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CartTableBodyRowProps {
  product: Product;
  checkedProducts: number[];
  onSelectProduct: (checked: boolean, itemId: number) => void;
}

function CartTableBodyRow({ product, checkedProducts, onSelectProduct }: CartTableBodyRowProps) {
  const [count, setCount] = useState(1);
  return (
    <tr className="cart-deal-item" key={product.item_no}>
      <td>
        <input
          type="checkbox"
          onChange={(event) => onSelectProduct(event.target.checked, product.item_no)}
          checked={checkedProducts.some((el) => el === product.item_no)}
        />
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
          <select onChange={(e) => setCount(Number(e.target.value))}>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
        </div>
      </td>
      <td>{(product.price * count).toLocaleString()}원</td>
    </tr>
  );
}

export default CartTableBodyRow;
