import { type ChangeEvent } from 'react';
import type { CartItem, Coupon } from 'src/types/types';

export interface ExpenseContainerProps {
  couponData: Coupon[];
  checkedProducts: CartItem[];
}

export interface ExpensePresenterProps {
  couponData: Coupon[];
  checkedProducts: CartItem[];
  onSelectCoupon: (event: ChangeEvent<HTMLSelectElement>) => void;
  discountCost: number;
  totalCost: number;
}
