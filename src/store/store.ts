import { randomUUID } from 'crypto';
import { atom } from 'recoil';
import { DummyData } from '../components/units/product/list/List.container';

const productsState = atom<DummyData[]>({
  key: `productsState${randomUUID}`,
  default: [
    {
      item_no: 0,
      item_name: '',
      detail_image_url: '',
      price: '',
      score: 0,
    },
  ],
});

export default productsState;
