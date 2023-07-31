import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { Product } from 'src/types/types';

export const DummyProductData = new Array(30).fill(0).map((_, index): Product => {
  const data = {
    item_no: index + 1,
    item_name: `food ${index + 1}`,
    detail_image_url: '',
    price: Math.floor(Math.random() * 1000) * (index + 1),
    score: Math.floor(Math.random() * 100),
  };

  return data;
});

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const dirRelativeToPublicFolder = 'data-image';
    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    const filenames = fs.readdirSync(dir);
    const images = filenames.map((name) => path.join('/', dirRelativeToPublicFolder, name));
    const imageURLs = [...images, ...images, ...images];
    const productList = DummyProductData.map((item, index) => {
      return { ...item, detail_image_url: imageURLs[index] };
    })
      // score 기준 내림차순
      .sort((a: Product, b: Product) => {
        return b.score - a.score;
      })
      .map((item, index) => {
        return index % 4 === 0 ? { ...item, availableCoupon: false } : item;
      });

    // page 별 pagination 처리
    const page = Number(req.query.page || 1) * 5;

    res.status(200).json({
      page: Number(req.query.page || 1),
      totalPage: 6,
      productItems: productList.slice(page - 5, page),
    });
  }
}
