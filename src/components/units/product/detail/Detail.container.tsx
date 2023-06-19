import { useRouter } from 'next/router';
import DetailPresenter from './Detail.presnter';

const DetailContainer = () => {
  const router = useRouter();
  const goodsId: string = router.asPath.split('/').at(-1)!;
  return <DetailPresenter goodsId={goodsId} />;
};

export default DetailContainer;
