import { type MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import ItemCard from '../../../../common/itemCard';
import CartButton from '../../../../common/cartButton';
import { Product } from '../../../../../types/types';
import { cartListState, cartListStatsState } from '../../../../../store/store';

interface ItemProps {
  data: Product;
}

const TEST_BLUR_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcYAwAAVkAxbGRRlAAAAAASUVORK5CYII=';

const Item = ({ data }: ItemProps) => {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const { totalNum } = useRecoilValue(cartListStatsState);

  const isInCart = cartList.some((product) => product.item_no === data.item_no);

  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    // event.stopPropagation();
    // stopPropagation() 으로 a 태그가 클릭되는 것을 막지 못함.
    // Link 태그는 본래 client-side로 작동하지만, 다른 이벤트에서 전파되어 클릭되면
    // server-side로 작동하여 페이지가 새로고침 된다.
    event.preventDefault();
    // 장바구니에
    if (isInCart) {
      // 있다면 빼기
      setCartList((oldCartList) =>
        oldCartList.filter((product) => product.item_no !== data.item_no)
      );
    } else {
      // 없다면 담기
      // 장바구니 개수 제한(3개)
      if (totalNum > 2) {
        alert('장바구니가 가득찼습니다.');
        return;
      }
      setCartList((oldCartList) => [...oldCartList, { ...(data as Product) }]);
    }
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
        <div />
        <span>{data.item_name}</span>
        <div className="footer">
          <span>{data.price}</span>
          <CartButton mode="toggle" onClickButton={onClickButton} isInCart={isInCart} />
        </div>
      </Link>
    </ItemCard>
  );
};

export default Item;
