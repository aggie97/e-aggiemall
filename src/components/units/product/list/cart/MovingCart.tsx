import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import type { Product } from 'src/types/types';
import { cartListStatsState } from 'src/store/store';

const MovingCartWrapper = styled.div`
  position: sticky;

  width: 100px;
  height: 400px;
  top: calc(2rem + 80px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: #39425b;
  font-size: 0.625rem;
  color: white;
  a {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
    background-color: inherit;
    color: inherit;
    :hover :not(span) {
      text-decoration: underline;
    }
  }
  span {
    background-color: #39425b;
    color: #39baff;
    font-weight: 600;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #333;
`;

const RecentViewedListBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #5555;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;

  span {
    font-size: 0.75rem;
    text-align: center;
    color: #555;
  }
`;

const MovingCart = () => {
  const { totalNum } = useRecoilValue(cartListStatsState);
  const recentViewedItemCount = 0;
  const recentViewedItems: Product[] = [];
  return (
    <MovingCartWrapper>
      <Section>
        <Link href="/cart">
          장바구니 <span>{totalNum}</span>
        </Link>
      </Section>
      <Divider />
      <Section>
        최근 본 상품 <span>{recentViewedItemCount}</span>
      </Section>
      <RecentViewedListBox>
        {recentViewedItems.length > 0 ? (
          <ul>
            {recentViewedItems.map((item) => (
              <li>
                <Image src={item.detail_image_url} width={92} height={92} alt="product_image" />
              </li>
            ))}
          </ul>
        ) : (
          <span>최근본 상품이 없습니다.</span>
        )}
      </RecentViewedListBox>
    </MovingCartWrapper>
  );
};

export default MovingCart;
