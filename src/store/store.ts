import { randomUUID } from 'crypto';
import { atom, selector } from 'recoil';
import { Product } from '../types/types';

export const productsState = atom<Product[]>({
  key: `productsState${randomUUID}`,
  default: [],
});

// 뭐가 더 나을까?
// TODO: 상품 상태에 장바구니에 담겨있는지 여부에 관한 상태를 포함시켜야 할 것인가
//  이 경우에는 장바구니 관려 CRUD API가 필요해짐. 회원 개념이 없는 상태이므로 굳이 서버에 저장해둘 필요가 없다.
// 아니면, 장바구니에 담긴 상품 목록 상태를 따로 만들어서 모든 상품 컴포넌트 마다 비교를 할 것인가
//  현재는 두 번째 케이스가 적합하다 판단됨.

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
