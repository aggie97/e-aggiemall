import * as S from './Detail.styles';

interface DetailPresenterProps {
  goodsId: string;
}

const DetailPresenter = (props: DetailPresenterProps) => {
  return <S.ProductDetailWrapper>상품 {props.goodsId}의 상세 페이지임</S.ProductDetailWrapper>;
};

export default DetailPresenter;
