import { type ChangeEvent, useState } from 'react';

import ExpensePresenter from './Expense.presenter';
import type { ExpenseContainerProps } from './Expense.types';

const Expense = ({ couponData, checkedProducts }: ExpenseContainerProps) => {
  const [coupon, setCoupon] = useState<string>('');

  const onSelectCoupon = (event: ChangeEvent<HTMLSelectElement>) => {
    setCoupon(event?.target.value);
  };

  /** 쿠폰 적용 불가능한 상품들 */
  const couponUnavailableProducts = checkedProducts.filter((checkedItem) =>
    Object.prototype.hasOwnProperty.call(checkedItem, 'availableCoupon')
  );

  /** 쿠폰 적용 가능한 상품들 */
  const couponAvailableProducts = checkedProducts.filter(
    (checkedItem) => !Object.prototype.hasOwnProperty.call(checkedItem, 'availableCoupon')
  );

  const discount = () => {
    let discountCost = 0;

    // 선택된 상품 중 쿠폰 적용 가능한 상품들이 없다면 0원 반환
    if (couponAvailableProducts.length === 0) return discountCost;

    const totalCouponAvailableCost = couponAvailableProducts.reduce(
      (total, { count, price }) => total + count * price,
      0
    );

    const [type, value] = coupon.split('/');

    if (type === 'percentage') {
      discountCost = Math.floor(totalCouponAvailableCost * (Number(value) / 100));
    }

    if (type === 'absolute') {
      discountCost = Number(value);
    }

    return discountCost;
  };

  const discountCost = discount();

  const totalCost =
    couponUnavailableProducts.reduce((total, { count, price }) => total + count * price, 0) +
    couponAvailableProducts.reduce((total, { count, price }) => total + count * price, 0) -
    discountCost;

  return (
    <ExpensePresenter
      totalCost={totalCost}
      discountCost={discountCost}
      checkedProducts={checkedProducts}
      onSelectCoupon={onSelectCoupon}
      couponData={couponData}
    />
  );
};

export default Expense;
