import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';

import ListContainer from 'src/components/units/product/list/List.container';
import { productsState } from 'src/store/store';
import { type Data } from 'src/types/types';

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async ({ query }) => {
  const res = await axios.get(`http://localhost:3000/api/data?page=${query.page}`);
  const data = await res.data;
  return { props: { ...data } };
};

const Products: NextPage<Data> = ({ page, totalPage, productItems }: Data) => {
  const [, setProductsList] = useRecoilState(productsState);

  useEffect(() => {
    setProductsList(productItems);
  }, [productItems, setProductsList]);

  return <ListContainer productItems={productItems} page={page} totalPage={totalPage} />;
};

export default Products;
