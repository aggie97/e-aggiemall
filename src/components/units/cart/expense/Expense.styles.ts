import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PaymentBox = styled.div<{ $visible: boolean }>`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};

  .coupon-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    select {
      padding: 0.5rem;
      cursor: pointer;
    }
  }

  .total-calculation {
    margin-block: 2rem;
    border: 4px solid #ccc;
    padding: 1.5rem 1rem;
    text-align: center;
    .price {
      font-size: 1.25rem;
      font-weight: 700;
    }

    .discount {
      color: red;
    }
  }
`;
