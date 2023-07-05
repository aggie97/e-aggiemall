import type { Product } from 'src/types/types';
import Item from './Item';
import * as S from './List.styles';
import MovingCart from './cart/MovingCart';
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
