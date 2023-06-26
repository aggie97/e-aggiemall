import Item from './Item';
import * as S from './List.styles';
import MovingCart from './cart/MovingCart';
import type { Product } from '../../../../types/types';
import Pagination from './pagination';

interface ListPresenterProps {
  data: Product[];
}

const ListPresenter = ({ data }: ListPresenterProps) => {
  return (
    <>
      <S.ProductListWrapper>
        <S.ListBox>
          {data.map((el) => (
            <Item key={el.item_no} data={el} />
          ))}
        </S.ListBox>
        <S.CartZone>
          <MovingCart />
        </S.CartZone>
      </S.ProductListWrapper>
      <Pagination />
    </>
  );
};

export default ListPresenter;
