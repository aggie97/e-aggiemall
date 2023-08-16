import styled from 'styled-components';

interface IHrStyle {
  color: string;
}

export const ProductDetailWrapper = styled.section`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ImageBox = styled.div`
  margin-right: 1rem;

  > img {
    object-fit: cover;
    object-position: center center;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  margin-top: 1rem;

  font-size: 14px;
`;

export const H2 = styled.h2`
  line-height: 22px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0.83em;
`;

export const Score = styled.span`
  color: #346aff;
`;

export const Price = styled.span`
  font-family: Tahoma;
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;
  color: #cb1400;
`;

export const AccumulatePoint = styled.div`
  margin-block: 0.75rem;
  width: fit-content;
  font-size: 12px;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 15px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ArriveAt = styled.p`
  line-height: 20px;
`;
export const Seller = styled.p`
  line-height: 25px;
`;
export const ShippingCompany = styled.span``;
export const ControllerBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  > * {
    height: 42px;
    font-size: 1.15rem;
    font-weight: bold;
  }

  button {
    border: 1px solid #346aff;
  }
`;

export const Select = styled.select`
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
`;

export const CartButton = styled.button`
  flex: 3;
  color: #346aff;
  background-color: #fff;
`;

export const BuyButton = styled.button`
  flex: 3;
  color: #fff;
  background-color: #346aff;
`;

export const Hr = styled.div`
  border: 1px solid ${({ color }: IHrStyle) => color};
  margin-block: 1rem;
`;
