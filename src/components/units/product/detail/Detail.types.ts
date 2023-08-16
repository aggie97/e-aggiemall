import { ChangeEvent, MouseEvent } from 'react';
import { Product } from 'src/types/types';

export interface DetailContainerProps {
  product: Product;
}

export interface DetailPresenterProps {
  product: Product;
  count: number;
  onClickCartButton: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCount: (event: ChangeEvent<HTMLSelectElement>) => void;
}
