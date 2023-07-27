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

    h1 {
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  }

  .cart-table {
    width: 100%;
    margin-top: 2rem;
    .table-head {
      width: 100%;
      font-weight: 600;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      background-color: #fafafa;
      th {
        height: 40px;
        vertical-align: middle;
        text-align: center;
      }
      th:first-of-type {
        label {
          position: relative;
          span {
            position: absolute;
            width: 64px;
          }
        }
      }
    }

    .cart-deal-item {
      border: 1px solid #ddd;
      border-left: none;
      border-right: none;
      td {
        vertical-align: middle;
        text-align: center;
      }
      td:nth-of-type(1) {
        width: 50px;
        padding: 1rem 0;
      }
      td:nth-of-type(2) {
        width: 80px;
        padding: 1rem 1rem 1rem 0;
        img {
          object-fit: cover;
        }
      }
      td:nth-of-type(3) {
        width: 700px;
        padding-right: 1rem;
        .product-info {
          border-bottom: 1px solid #ddd;
          line-height: 35px;
          text-align: start;
          vertical-align: top;
        }
        .product-select-count {
          line-height: 35px;
          text-align: end;
        }
      }
      td:nth-of-type(4) {
        width: 170px;
        border-left: 1px solid #ddd;
      }
    }
  }
`;
