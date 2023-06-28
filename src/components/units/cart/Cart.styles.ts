import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CartPageWrapper = styled.section`
  width: 1000px;
  border: 1px solid #e0e0e0;
  margin: 0 auto 70px;
  padding: 40px 39px;
  background: #fff;

  .cart-title {
    background: url('https://img1a.coupangcdn.com/image/order/img_orderstep4.gif') no-repeat 0 -200px;
    height: 45px;
    margin-bottom: 0;
    padding-bottom: 32px;
    h1 {
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  }

  .product-in-cart {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #333;
    gap: 2rem;
    padding: 1rem;
    .product-info {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      *:nth-of-type(1) {
        flex: 1 1 100px;
      }
      *:nth-of-type(2) {
        flex: 3 1 700px;
      }
      *:nth-of-type(3) {
        flex: 1 1 100px;
      }
    }
  }
`;
