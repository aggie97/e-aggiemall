import Image from 'next/image';

import useMoveTo from '../../../../../utils/MoveTo';
import ItemCard from '../../../../common/itemCard';
import CartButton from '../../../../common/cartButton';
import { Product } from '../../../../../types/types';

interface ItemProps {
  data: Product;
}

const TEST_BLUR_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcYAwAAVkAxbGRRlAAAAAASUVORK5CYII=';

const Item = ({ data }: ItemProps) => {
  const { onClickMoveTo } = useMoveTo();
  return (
    <ItemCard onClick={onClickMoveTo(`/products/${data.item_no}`)}>
      <Image
        src={data.detail_image_url}
        alt="product_image"
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL={TEST_BLUR_URL}
      />
      <div />
      <span>{data.item_name ?? 'Loading...'}</span>
      <div className="footer">
        <span>{data.price ?? 'Loading...'}</span>
        <CartButton mode="toggle" data={data} />
      </div>
    </ItemCard>
  );
};

export default Item;
