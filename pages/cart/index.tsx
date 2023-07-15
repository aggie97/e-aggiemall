import { CouponData } from '@src/types/types';
import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';

import CartContainer from 'src/components/units/cart/Cart.container';

export const getServerSideProps: GetServerSideProps<{ data: CouponData }> = async () => {
  const res = await axios.get(`http://localhost:3000/api/coupon`);
  const data = await res.data;

  return { props: { ...data } };
};

const CartPage: NextPage<CouponData> = ({ coupons }: CouponData) => {
  return <CartContainer />;
};

export default CartPage;
