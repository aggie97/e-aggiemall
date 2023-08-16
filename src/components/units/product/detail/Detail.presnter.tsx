import Image from 'next/image';
import { randomUUID } from 'crypto';

import { COUPANG_ACCUMULATE_POINT_ICON_URL } from 'src/constants/url';
import * as S from './Detail.styles';
import { DetailPresenterProps } from './Detail.types';

const DetailPresenter = ({
  product,
  count,
  onClickCartButton,
  onChangeCount,
}: DetailPresenterProps) => {
  const price = product.price * count;
  return (
    <S.ProductDetailWrapper>
      <S.Layout>
        <S.ImageBox>
          <Image
            width={410}
            height={410}
            src={product.detail_image_url}
            alt={`${product.item_name} 사진`}
          />
        </S.ImageBox>
        <S.ContentBox>
          <S.H2>
            <S.Title>{product.item_name}</S.Title>
            상품 점수 <S.Score>{product.score}점</S.Score>
          </S.H2>
          <S.Hr color="#ddd" />
          <S.Price>{price.toLocaleString()}원</S.Price>
          <S.AccumulatePoint>
            <Image
              src={COUPANG_ACCUMULATE_POINT_ICON_URL}
              width={14}
              height={14}
              alt="point icon"
            />
            최대 {Math.floor((price / 100) * 5).toLocaleString()}원
          </S.AccumulatePoint>
          <S.Hr color="#eee" />
          <S.ArriveAt>
            배송비 없음
            <br />
            {new Date().toLocaleDateString('ko', { dateStyle: 'full' })} 도착 예정
          </S.ArriveAt>
          <S.Hr color="#eee" />
          <S.Seller>
            판매자 : AGGIE
            <br /> 판매자 평가 99.99% 👍
          </S.Seller>
          <S.Hr color="#eee" />
          <S.ShippingCompany>배송사 : 따릉이</S.ShippingCompany>
          <S.Hr color="#eee" />
          <S.ControllerBox>
            <S.Select onChange={onChangeCount}>
              {new Array(10).fill(1).map((_, i) => (
                <option key={`count${randomUUID}`}>{i + 1}</option>
              ))}
            </S.Select>
            <S.CartButton onClick={onClickCartButton}>장바구니 담기</S.CartButton>
            <S.BuyButton>바로구매</S.BuyButton>
          </S.ControllerBox>
        </S.ContentBox>
      </S.Layout>
    </S.ProductDetailWrapper>
  );
};

export default DetailPresenter;
