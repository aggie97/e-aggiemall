import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Product } from '@src/types/types';

const DummyData = new Array(30).fill(0).map((_, index) => {
  return {
    item_no: index + 1,
    item_name: `food ${index + 1}`,
    detail_image_url: '',
    price: 1000 * (index + 1),
    score: Math.random() * 100,
  };
});

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const dirRelativeToPublicFolder = 'data-image';
    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    const filenames = fs.readdirSync(dir);
    const images = filenames.map((name) => path.join('/', dirRelativeToPublicFolder, name));
    const imageURLs = [...images, ...images, ...images];
    const data = DummyData.map((item, index) => {
      return { ...item, detail_image_url: imageURLs[index] };
    });
    // page 별 pagination 처리
    const page = Number(req.query.page || 1) * 5;
    // score 기준 내림차순
    data.sort((a: Product, b: Product) => {
      return b.score - a.score;
    });

    res.status(200).json({
      page: Number(req.query.page || 1),
      totalPage: 6,
      productItems: data.slice(page - 5, page),
    });
  }
}
