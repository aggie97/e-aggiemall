import { type Coupon } from 'src/types/types';
import { NextApiRequest, NextApiResponse } from 'next';

const DummyCouponData: Coupon[] = [
  {
    id: 1,
    type: 'percentage',
    value: 10,
  },
  {
    id: 2,
    type: 'percentage',
    value: 20,
  },
  {
    id: 3,
    type: 'percentage',
    value: 30,
  },
  {
    id: 4,
    type: 'percentage',
    value: 40,
  },
  {
    id: 5,
    type: 'percentage',
    value: 50,
  },
  {
    id: 6,
    type: 'absolute',
    value: 1000,
  },
  {
    id: 7,
    type: 'absolute',
    value: 2000,
  },
  {
    id: 8,
    type: 'absolute',
    value: 3000,
  },
  {
    id: 9,
    type: 'absolute',
    value: 4000,
  },
  {
    id: 10,
    type: 'absolute',
    value: 5000,
  },
];

export default async function getCoupons(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const coupons = DummyCouponData;

    res.status(200).json({
      coupons,
    });
  }
}
