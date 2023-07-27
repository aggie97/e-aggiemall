import { atom } from 'recoil';
import type { CartItem, Product } from 'src/types/types';

export interface CartListStat {
  totalNum: number;
}

export const productsState = atom<Product[]>({
  key: `productsState`,
  default: [],
});

export const cartListState = atom<CartItem[]>({
  key: `cartListState`,
  default: [],
});
