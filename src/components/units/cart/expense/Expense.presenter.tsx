import * as S from './Expense.styles';
import { ExpensePresenterProps } from './Expense.types';

const ExpensePresenter = ({
  onSelectCoupon,
  couponData,
  checkedProducts,
  discountCost,
  totalCost,
}: ExpensePresenterProps) => (
  <S.PaymentBox $visible={checkedProducts.length > 0}>
    {/* 쿠폰 선택 박스 */}
    <div className="coupon-box">
      <select defaultValue="" onChange={onSelectCoupon}>
        <option value="">쿠폰 적용하기</option>
        <optgroup label="--비율 할인 쿠폰--">
          {couponData
            .filter(({ type }) => type === 'percentage')
            .map(({ id, type, value }) => (
              <option key={id} value={`${type}/${value}`}>
                {value}%
              </option>
            ))}
        </optgroup>
        <optgroup label="--정액 할인 쿠폰--">
          {couponData
            .filter(({ type }) => type === 'absolute')
            .map(({ id, type, value }) => (
              <option key={id} value={`${type}/${value}`}>
                {value.toLocaleString()}원
              </option>
            ))}
        </optgroup>
      </select>
    </div>
    {/* 비용 박스 */}
    <div className="total-calculation">
      <span>
        총 상품가격{' '}
        <strong className="price">
          {checkedProducts
            .reduce((total, { price, count }) => total + price * count, 0)
            .toLocaleString()}
        </strong>
        원
      </span>
      &ensp;-&ensp;
      <span className="discount">
        할인가격 <strong className="discount price">{discountCost.toLocaleString()}</strong>원
      </span>
      &ensp;=&ensp;
      <span className="total">
        총 주문가격{' '}
        <strong className="price">{totalCost < 0 ? 0 : totalCost.toLocaleString()}</strong>원
      </span>
    </div>
  </S.PaymentBox>
);

export default ExpensePresenter;
