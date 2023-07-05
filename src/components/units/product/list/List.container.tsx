import type { Product } from 'src/types/types';
import ListPresenter from './List.presenter';

// import axios from 'axios';
// import { useEffect } from 'react';

// const checkExpress = async () => {
//   try {
//     const res = await axios.get('/getData');
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// };

const ListContainer = ({ data }: { data: Product[] }) => {
  return <ListPresenter data={data} />;
};

export default ListContainer;
