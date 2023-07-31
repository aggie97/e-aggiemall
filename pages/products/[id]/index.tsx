import axios from 'axios';
import { GetServerSideProps, type NextPage } from 'next';

import DetailContainer from 'src/components/units/product/detail/Detail.container';
import { API_BASE_URL } from 'src/constants/url';
import type { ProductData } from 'src/types/types';

export const getServerSideProps: GetServerSideProps<{ data: ProductData }> = async ({ query }) => {
  const { data } = await axios.get(`${API_BASE_URL}/products/${query.id}`);
  return { props: { ...data } };
};

const Products: NextPage<ProductData> = ({ productData }: ProductData) => {
  return <DetailContainer product={productData} />;
};

export default Products;
