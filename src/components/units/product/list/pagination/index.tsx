import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Data } from '@src/types/types';
import { useState } from 'react';

const PaginationBox = styled.div`
  position: sticky;
  bottom: 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 -1px 10px 5px rgba(144 144 144/0.3);

  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    background-color: transparent;
  }

  a,
  span {
    display: inline-block;
    width: 29px;
    height: 29px;
    text-align: center;
    vertical-align: middle;
    line-height: 30px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;

    :hover {
      :not(:first-of-type, :last-of-type) {
        text-decoration: underline;
      }
      color: red;
    }

    &.selected {
      border: 1px solid #0073e9;
      color: #0073e9;
    }
  }

  button {
    width: 29px;
    height: 29px;
    border: none;
    background-color: #fff;
    :hover:not(:disabled) {
      color: red;
    }
  }
`;

const Pagination = ({ totalPage }: Pick<Data, 'totalPage'>) => {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);
  const lastPage = totalPage;

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 5);
    router.push({ pathname: '/products', query: { page: startPage - 5 } });
  };
  const onClickNextPage = () => {
    setStartPage((prev) => prev + 5);
    router.push({ pathname: '/products', query: { page: startPage + 5 } });
  };

  return (
    <PaginationBox>
      <div className="link-container">
        <button type="button" onClick={onClickPrevPage} disabled={startPage < 6}>
          &lt;
        </button>
        {new Array(5).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <Link
                key={Math.random()}
                href={{ pathname: '/products', query: { page: index + startPage } }}
                className={`${
                  router.query.page
                    ? router.query.page === String(index + startPage) && 'selected'
                    : index === 0 && 'selected'
                }`}
              >
                {index + startPage}
              </Link>
            )
        )}
        <button type="button" onClick={onClickNextPage} disabled={startPage + 4 >= lastPage}>
          &gt;
        </button>
      </div>
    </PaginationBox>
  );
};

export default Pagination;
