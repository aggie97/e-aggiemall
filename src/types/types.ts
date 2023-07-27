export interface Data {
  page: number;
  totalPage: number;
  productItems: Product[];
}

export interface Product {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}

export interface CartItem extends Product {
  count: number;
}

export interface Coupon {
  id: number;
  type: 'absolute' | 'percentage';
  value: number;
}

export interface CouponData {
  coupons: Coupon[];
}
