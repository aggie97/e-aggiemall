import ListPresenter from './List.presenter';
import dummyData from '../../../../dummy/data.json';
// import axios from 'axios';
// import { useEffect } from 'react';

export interface DummyData {
  id: number;
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

const ListContainer = () => {
  const data: DummyData[] = [...dummyData].sort((a, b) => b.score - a.score);

  // useEffect(() => {
  //   checkExpress();
  // }, []);
  return <ListPresenter data={data} />;
};

export default ListContainer;
