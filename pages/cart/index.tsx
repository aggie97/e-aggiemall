import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';

import { type CouponData } from 'src/types/types';
import CartContainer from 'src/components/units/cart/Cart.container';
import { API_BASE_URL } from 'src/constants/url';

export const getServerSideProps: GetServerSideProps<{ data: CouponData }> = async () => {
  const res = await axios.get(`${API_BASE_URL}/coupon`);
  const data = await res.data;
  return { props: { ...data } };
};

const CartPage: NextPage<CouponData> = ({ coupons }: CouponData) => {
  return <CartContainer coupons={coupons} />;
};

export default CartPage;
