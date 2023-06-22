import type { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import ListContainer from '../../src/components/units/product/list/List.container';
import { productsState } from '../../src/store/store';
import { Product } from '../../src/types/types';

export const getServerSideProps: GetServerSideProps<{ data: Product[] }> = async () => {
  const res = await axios.get('http://localhost:3000/api/data');
  const data = await res.data;
  return { props: { data } };
};

const Products: NextPage<{ data: Product[] }> = ({ data }: { data: Product[] }) => {
  const [, setProductsList] = useRecoilState(productsState);

  useEffect(() => {
    setProductsList(data);
  }, [data, setProductsList]);

  return <ListContainer data={data} />;
};

export default Products;
