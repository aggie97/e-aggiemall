import type { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import ListContainer, { DummyData } from '../../src/components/units/product/list/List.container';
import productsState from '../../src/store/store';

export const getServerSideProps: GetServerSideProps<{ data: DummyData[] }> = async () => {
  const res = await axios.get('http://localhost:3000/api/data');
  const data = await res.data;
  return { props: { data } };
};

const Products: NextPage<{ data: DummyData[] }> = ({ data }: { data: DummyData[] }) => {
  const [, setProductsList] = useRecoilState(productsState);

  useEffect(() => {
    setProductsList(data);
  }, [data, setProductsList]);

  return <ListContainer data={data} />;
};

export default Products;
