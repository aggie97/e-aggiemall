import DetailPresenter from './Detail.presnter';
import { DetailContainerProps } from './Detail.types';

const DetailContainer = ({ product }: DetailContainerProps) => {
  return <DetailPresenter itemNo={product.item_no} />;
};

export default DetailContainer;
