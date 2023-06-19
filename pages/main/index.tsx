import { type NextPage } from 'next';
import Link from 'next/link';

const MainPage: NextPage = () => {
  return (
    <>
      메인 페이지입니다~
      <Link href={'/products'}>상품 보러 가기</Link>
    </>
  );
};

export default MainPage;
