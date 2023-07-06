import type { Data } from 'src/types/types';
import ListPresenter from './List.presenter';

const ListContainer = (props: Data) => {
  const { productItems, page, totalPage } = props;

  return <ListPresenter page={page} totalPage={totalPage} productItems={productItems} />;
};

export default ListContainer;
