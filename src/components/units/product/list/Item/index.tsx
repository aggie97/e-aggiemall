import Image from 'next/image';
import useMoveTo from '../../../../../utils/MoveTo';
import ItemCard from '../../../../common/itemCard';
import { type DummyData } from '../List.container';

interface ItemProps {
  data: DummyData;
}

const blurURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcYAwAAVkAxbGRRlAAAAAASUVORK5CYII=';

const Item = (props: ItemProps) => {
  const { data } = props;
  const { onClickMoveTo } = useMoveTo();
  return (
    <ItemCard onClick={onClickMoveTo(`/products/${data.id}`)}>
      <Image
        src={data.detail_image_url}
        alt="product_image"
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL={blurURL}
      />
      <div />
      <span>{data.item_name ?? 'Loading...'}</span>
      <span>{data.price ?? 'Loading...'}</span>
    </ItemCard>
  );
};

export default Item;
