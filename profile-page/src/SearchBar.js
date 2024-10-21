import React, { useState, useEffect } from 'react';
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState('');   // 현재 출력된 텍스트
  const [currentIndex, setCurrentIndex] = useState(0);      // 현재 타이핑 중인 문자열 인덱스
  const [charIndex, setCharIndex] = useState(0);            // 문자열의 몇 번째 글자인지

  const textArr = [
    'Front-end Developer',
    'Web Publisher',
    'UX/UI Designer'
  ];

  // 커서 깜빡임 효과
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // 커서 깜빡임 간격 500ms

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);

  // 타이핑 효과
  useEffect(() => {
    if (currentIndex < textArr.length) {
      const timeoutId = setTimeout(() => {
        // 현재 텍스트에서 다음 문자를 추가
        setDisplayedText((prev) => prev + textArr[currentIndex][charIndex]);

        // 다음 글자로 넘어가기
        if (charIndex < textArr[currentIndex].length - 1) {
          setCharIndex(charIndex + 1);
        } else {
          // 다음 문자열로 넘어가기
          setTimeout(() => {
            setDisplayedText(''); // 새로운 문자열 출력 전에 비우기
            setCharIndex(0); // 다음 문자열을 0번째 글자부터 시작
            setCurrentIndex(currentIndex + 1); // 배열의 다음 문자열로 넘어감
          }, 1000); // 한 문자열이 완성된 후 1초 대기
        }
      }, 100); // 각 글자가 나타나는 속도 (100ms)

      return () => clearTimeout(timeoutId); // 타이머 정리
    }
  }, [charIndex, currentIndex, textArr]);

  return (
    <div className="input_group">
      <span className="search_icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="text"
        value={displayedText + (isCursorVisible ? '|' : '')} // 커서를 텍스트 뒤에 붙임
        readOnly // 사용자가 직접 입력하지 않도록 readOnly 설정
      />
    </div>
  );
}

export default SearchBar;
