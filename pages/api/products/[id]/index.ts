import type { NextApiRequest, NextApiResponse } from 'next';
import { DummyProductData } from 'pages/api/products';

export default async function getProduct(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const productData = DummyProductData.find(({ item_no }) => item_no === Number(req.query.id));

    res.status(200).json({ productData });
  }
}
