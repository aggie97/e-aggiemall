import Link from 'next/link';
import Image from 'next/image';
import { type MouseEvent } from 'react';

import type { Product } from 'src/types/types';
import ItemCard from 'src/components/common/itemCard';
import CartButton from 'src/components/common/cartButton';
import { TEST_BLUR_URL } from 'src/constants/url';
import useCart from 'src/hooks/useCart';

interface ItemProps {
  data: Product;
}

const Item = ({ data }: ItemProps) => {
  const { checkItemInCart, setItemToCart, deleteItemFromCart } = useCart();

  const isExistInCart = checkItemInCart(data.item_no);
  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!isExistInCart) setItemToCart(data);
    else deleteItemFromCart([data]);
  };
  return (
    <ItemCard>
      <Link href={`/products/${data.item_no}`}>
        <Image
          src={data.detail_image_url}
          alt="product_image"
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL={TEST_BLUR_URL}
        />
        <div className="divider" />
        <span>{data.item_name}</span>
        <div className="footer">
          <span>{data.price.toLocaleString()}원</span>
          <CartButton mode="toggle" onClickButton={onClickButton} isInCart={isExistInCart} />
        </div>
      </Link>
    </ItemCard>
  );
};

export default Item;
