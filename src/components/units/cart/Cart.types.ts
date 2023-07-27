import type { CartItem, Coupon } from 'src/types/types';

export interface CartPresenterProps {
  couponData: Coupon[];
  checkedProducts: CartItem[];
  cartList: CartItem[];
  onSelectProduct: (checked: boolean, item: CartItem) => void;
  onSelectAllProducts: (checked: boolean) => void;
}
