import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const dirRelativeToPublicFolder = 'data-image';
    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    const filenames = fs.readdirSync(dir);
    const images = filenames.map((name) => path.join('/', dirRelativeToPublicFolder, name));
    const data = new Array(30).fill(0).map((_, index) => {
      return {
        item_no: index + 1,
        item_name: `food ${index + 1}`,
        detail_image_url: images[index % 10],
        price: '10,000원',
        score: 1,
      };
    });
    res.statusCode = 200;
    res.json(data);
  }
}
