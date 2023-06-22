import Item from './Item';
import * as S from './List.styles';
import MovingCart from './cart/MovingCart';
import type { Product } from '../../../../types/types';

interface ListPresenterProps {
  data: Product[];
}

const ListPresenter = ({ data }: ListPresenterProps) => {
  return (
    <S.ProductListWrapper>
      <div />
      <S.ListBox>
        {data.map((el) => (
          <Item key={el.item_no} data={el} />
        ))}
      </S.ListBox>
      <S.CartZone>
        <MovingCart />
      </S.CartZone>
    </S.ProductListWrapper>
  );
};

export default ListPresenter;
