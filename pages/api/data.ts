import { NextApiRequest, NextApiResponse } from 'next';

// type DummyData = {
//   item_no: number;
//   item_name: string;
//   detail_image_url: string;
//   price: string;
//   score: number;
// };

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.json([
      {
        item_no: 1,
        item_name: 'Mousse - Mango',
        detail_image_url: 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
        price: '$18.93',
        score: 333,
      },
      {
        item_no: 2,
        item_name: 'Juice - Apple, 500 Ml',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$6.52',
        score: 863,
      },
      {
        item_no: 3,
        item_name: 'Bread - Roll, Calabrese',
        detail_image_url: 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
        price: '$38.32',
        score: 9,
      },
      {
        item_no: 4,
        item_name: 'Juice - Clamato, 341 Ml',
        detail_image_url: 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
        price: '$22.49',
        score: 422,
      },
      {
        item_no: 5,
        item_name: 'Potatoes - Purple, Organic',
        detail_image_url: 'http://dummyimage.com/200x200.png/cc0000/ffffff',
        price: '$92.06',
        score: 385,
      },
      {
        item_no: 6,
        item_name: 'Wine - Casillero Del Diablo',
        detail_image_url: 'http://dummyimage.com/200x200.png/dddddd/000000',
        price: '$98.25',
        score: 151,
      },
      {
        item_no: 7,
        item_name: 'Dasheen',
        detail_image_url: 'http://dummyimage.com/200x200.png/dddddd/000000',
        price: '$58.66',
        score: 821,
      },
      {
        item_no: 8,
        item_name: 'Pasta - Ravioli',
        detail_image_url: 'http://dummyimage.com/200x200.png/cc0000/ffffff',
        price: '$92.14',
        score: 516,
      },
      {
        item_no: 9,
        item_name: 'Ice Cream Bar - Hagen Daz',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$10.09',
        score: 658,
      },
      {
        item_no: 10,
        item_name: 'Breadfruit',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$75.16',
        score: 855,
      },
      {
        item_no: 11,
        item_name: 'Bacardi Raspberry',
        detail_image_url: 'http://dummyimage.com/200x200.png/cc0000/ffffff',
        price: '$36.76',
        score: 435,
      },
      {
        item_no: 12,
        item_name: 'Beef - Rouladin, Sliced',
        detail_image_url: 'http://dummyimage.com/200x200.png/cc0000/ffffff',
        price: '$69.61',
        score: 975,
      },
      {
        item_no: 13,
        item_name: 'Swiss Chard',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$10.76',
        score: 174,
      },
      {
        item_no: 14,
        item_name: 'Iced Tea - Lemon, 340ml',
        detail_image_url: 'http://dummyimage.com/200x200.png/dddddd/000000',
        price: '$64.83',
        score: 223,
      },
      {
        item_no: 15,
        item_name: 'Arrowroot',
        detail_image_url: 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
        price: '$64.96',
        score: 760,
      },
      {
        item_no: 16,
        item_name: 'Appetizer - Spring Roll, Veg',
        detail_image_url: 'http://dummyimage.com/200x200.png/dddddd/000000',
        price: '$62.71',
        score: 431,
      },
      {
        item_no: 17,
        item_name: 'Split Peas - Green, Dry',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$93.43',
        score: 673,
      },
      {
        item_no: 18,
        item_name: 'Coffee - Decafenated',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$29.82',
        score: 740,
      },
      {
        item_no: 19,
        item_name: 'Sugar - Brown, Indivitem_noual',
        detail_image_url: 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
        price: '$44.06',
        score: 22,
      },
      {
        item_no: 20,
        item_name: 'Pur Value',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$34.02',
        score: 573,
      },
      {
        item_no: 21,
        item_name: 'Syrup - Monin - Granny Smith',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$12.17',
        score: 738,
      },
      {
        item_no: 22,
        item_name: 'Bread - Sticks, Thin, Plain',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$22.77',
        score: 128,
      },
      {
        item_no: 23,
        item_name: 'Beef - Rouladin, Sliced',
        detail_image_url: 'http://dummyimage.com/200x200.png/cc0000/ffffff',
        price: '$30.53',
        score: 430,
      },
      {
        item_no: 24,
        item_name: 'Dehydrated Kelp Kombo',
        detail_image_url: 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
        price: '$79.96',
        score: 798,
      },
      {
        item_no: 25,
        item_name: 'Nut - Almond, Blanched, Whole',
        detail_image_url: 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
        price: '$6.06',
        score: 541,
      },
      {
        item_no: 26,
        item_name: 'V8 - Berry Blend',
        detail_image_url: 'http://dummyimage.com/200x200.png/cc0000/ffffff',
        price: '$93.19',
        score: 599,
      },
      {
        item_no: 27,
        item_name: 'Food Colouring - Blue',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$22.37',
        score: 815,
      },
      {
        item_no: 28,
        item_name: 'Bread - Pita',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$28.77',
        score: 797,
      },
      {
        item_no: 29,
        item_name: 'Coffee - Decafenated',
        detail_image_url: 'http://dummyimage.com/200x200.png/cc0000/ffffff',
        price: '$29.97',
        score: 561,
      },
      {
        item_no: 30,
        item_name: 'Canadian Emmenthal',
        detail_image_url: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        price: '$82.74',
        score: 84,
      },
    ]);
  }
}
