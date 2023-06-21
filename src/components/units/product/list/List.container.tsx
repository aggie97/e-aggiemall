import ListPresenter from './List.presenter';

// import axios from 'axios';
// import { useEffect } from 'react';

export interface DummyData {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: string;
  score: number;
}

// const checkExpress = async () => {
//   try {
//     const res = await axios.get('/getData');
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// };

const ListContainer = ({ data }: { data: DummyData[] }) => {
  return <ListPresenter data={data} />;
};

export default ListContainer;
