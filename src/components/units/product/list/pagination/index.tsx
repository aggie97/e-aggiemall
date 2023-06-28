import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PaginationBox = styled.div`
  position: relative;
  margin: 50px 0;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid black;

  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    background-color: transparent;
  }

  a {
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

  .blinder {
    position: absolute;
    width: calc(100vw / 2);
    height: 100%;
    top: -2px;
    background-color: #fff;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
`;

const threshold = new Array(101).fill(0).map((_, i) => i / 100);

const Pagination = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOffset(entry.intersectionRatio * 100);
          }
        });
      },
      { threshold }
    );

    observer.observe(box);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(box);
    };
  }, []);

  // styled-component로 동적 스타일 적용 시, 스크롤이 진행되는 만큼 class가 생성되어 너무 많은 class생성을 피하기 위한 인라인 스타일 적용
  const blinderLeftStyle = { transform: `translate3d(-${offset}%, 0, 0)` };
  const blinderRightStyle = { transform: `translate3d(${offset}%, 0, 0)` };

  return (
    <PaginationBox ref={boxRef}>
      <div className="blinder left" style={blinderLeftStyle} />
      <div className="link-container">
        <Link href="/">{'<'}</Link>
        <Link href="/" className="selected">
          1
        </Link>
        <Link href="/">2</Link>
        <Link href="/">3</Link>
        <Link href="/">{'>'}</Link>
      </div>
      <div className="blinder right" style={blinderRightStyle} />
    </PaginationBox>
  );
};

export default Pagination;
