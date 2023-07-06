import { randomUUID } from 'crypto';
import { atom, selector } from 'recoil';
import { Product } from 'src/types/types';

export const productsState = atom<Product[]>({
  key: `productsState${randomUUID}`,
  default: [],
});

export const cartListState = atom<Product[]>({
  key: `cartListState${randomUUID}`,
  default: [],
});

export const cartListStatsState = selector({
  key: `cartListStatsState${randomUUID}`,
  get: ({ get }) => {
    const cartList = get(cartListState);
    const totalNum = cartList.length;

    return {
      totalNum,
    };
  },
});
