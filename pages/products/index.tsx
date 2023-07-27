import type { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';

import type { Data } from 'src/types/types';
import ListContainer from 'src/components/units/product/list/List.container';
import { API_BASE_URL } from 'src/constants/url';

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async ({ query }) => {
  const res = await axios.get(`${API_BASE_URL}/data?page=${query.page || 1}`);
  const data = await res.data;
  return { props: { ...data } };
};

const Products: NextPage<Data> = (props: Data) => {
  return <ListContainer {...props} />;
};

export default Products;
