import Item from './Item';
import { type DummyData } from './List.container';
import * as S from './List.styles';
import MovingCart from './cart/MovingCart';

interface ListPresenterProps {
  data: DummyData[];
}

const ListPresenter = ({ data }: ListPresenterProps) => {
  return (
    <S.ProductListWrapper>
      <div />
      <S.ListBox>
        {data.map((el) => (
          <Item key={el.id} data={el} />
        ))}
      </S.ListBox>
      <S.CartZone>
        <MovingCart />
      </S.CartZone>
    </S.ProductListWrapper>
  );
};

export default ListPresenter;
