import { useRecoilState } from 'recoil';
import { cartListState } from 'src/store/store';
import { CartItem, Product } from 'src/types/types';

const useCart = () => {
  const [cartList, setCartList] = useRecoilState(cartListState);

  /** 카트에 이미 있는 상품인지 조회 */
  const checkItemInCart = (itemId: number) => {
    return cartList.some(({ item_no }) => itemId === item_no);
  };

  /** 카트에 상품 추가 */
  const setItemToCart = (item: Product, count?: number) => {
    if (cartList.length === 3) {
      alert('장바구니에 상품을 3개까지 담을 수 있습니다.');
      return;
    }

    const cartItem: CartItem = {
      ...item,
      count: count ?? 1,
    };
    setCartList((prev) => [...prev, cartItem]);
  };

  /** 카트에 있는 상품 수량 변경 */
  const changeItemCount = (itemId: number, count: number) => {
    setCartList((prev) =>
      prev.map((item) => (item.item_no === itemId ? { ...item, count } : { ...item }))
    );
  };

  /** 카트에서 상품 제거 */
  const deleteItemFromCart = (selectedItems: Product[]) => {
    if (cartList.length < 1) {
      alert('장바구니가 비어있습니다.');
      return;
    }

    setCartList((prev) =>
      prev.filter(({ item_no }) => {
        let isSameItem;
        for (let i = 0; i < selectedItems.length; i += 1) {
          isSameItem = item_no !== selectedItems[i].item_no;
        }
        return isSameItem;
      })
    );
  };

  return {
    cartList,
    checkItemInCart,
    setItemToCart,
    changeItemCount,
    deleteItemFromCart,
  };
};

export default useCart;
