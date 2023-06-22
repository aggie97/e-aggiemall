import { useRouter } from 'next/router';

const useMoveTo = () => {
  const router = useRouter();

  const onClickMoveTo = (path: string) => () => {
    router.push(path);
  };

  return {
    onClickMoveTo,
  };
};

export default useMoveTo;
