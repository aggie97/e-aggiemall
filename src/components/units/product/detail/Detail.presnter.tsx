import * as S from './Detail.styles';

interface DetailPresenterProps {
  itemNo: number;
}

const DetailPresenter = ({ itemNo }: DetailPresenterProps) => {
  return <S.ProductDetailWrapper>상품 {itemNo}의 상세 페이지임</S.ProductDetailWrapper>;
};

export default DetailPresenter;
